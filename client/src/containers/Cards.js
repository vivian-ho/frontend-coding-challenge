import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardsComponent from '../components/Cards';

class Cards extends Component {
  state = {
    cards: [],
    currentCard: '',
    isOpen: false,
  };

  componentWillMount() {
    console.log('card');
    // fetch campaigns from server
    this.fetchCards()
      .then(res => {
        this.setState({ cards: res });
        return res;
      })
      .catch(err => console.log(err));
  };

  // fetch our GET route from the Express server
  fetchCards = async () => {
    const response = await fetch(`/api/getCards/${localStorage.getItem('currentCampaign')}`);
    
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body;
  };

  render() {
    return <CardsComponent {...this.state}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards 
  };
};

export default connect(mapStateToProps)(Cards);