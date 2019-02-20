const express = require('express');
const campaigns = require('./data/campaigns.json');
const cards = require('./data/cards.json');
const filters = require('./data/filters.json');

const cors = require('cors');

const path = require('path');

const app = express();

// enable Access-Control-Allow-Origin across all headers
app.use(cors());

// serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// an api endpoint that returns a list of campaigns
app.get('/api/getCampaigns', (req, res) => {
    res.json(campaigns);
});

// an api endpoint that returns a list of filters
app.get('/api/getFilters', (req, res) => {
    res.json(filters);
 });

// an api endpoint that returns a list of cards
app.get('/api/getCards/:campaignId', (req, res) => {
    const { campaignId } = req.params;

    if (campaignId) {
        res.json(cards.filter(c => c.campaignId === campaignId));
    } else {
        res.json(cards);
    }
});

// an api endpoint that updates the state of cards
app.put('/api/transfer/:campaignId/:state', (req, res) => {
    const { campaignId, state } = req.params;
    let filterCards = [];

    if (campaignId) {
        filterCards = cards.filter(c => c.campaignId === campaignId);

        filterCards.forEach(card => {
            card.currentWorkflow = state;
        });

        res.json(filterCards);
    } else {
        res.status(400).send({result: 'missing campaign id'});
    }
});

// handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3002;
app.listen(port);

console.log('App is listening on port ' + port);

