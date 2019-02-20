import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, ProgressBar} from 'react-bootstrap';
import '../styles/Card.css';
import { Ellipsis } from 'react-bootstrap/PageItem';
import TextEllipsis from 'react-text-ellipsis';

const divStyle = {
  margin: '0rem 15rem 0rem 25rem'
};

const style = {
    
    width: '10rem',
    border: '1px solid #c0c0c0',
    backgroundColor: '#f0f0f0',
    float: 'left',
};

const emptyCardStyle = {
  width: '10rem',
  border: '1px solid #c0c0c0',
  backgroundColor: '#f0f0f0',
  float: 'left',
  height: '15rem'
}

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }

  renderEmptyCard = () => {
    return (
      <div className="row justify-content-md-center">
        <div className="col-xs-8 col-sm-6 col-md-3">
          <Card style={style}>
            <Card.Img variant="top" style={style} />
            <Card.Body style={style}>
            <i className="fa fa-plus-circle"></i>
            <h4>Create a Service Card</h4>
              
            </Card.Body>
            <Card.Footer className="text-muted" style={style}>
              
            </Card.Footer>
        </Card>
        </div>
      </div>
    )
  }

  renderCards = () => {
    const cards = this.props.cards || [];

    return (
      <div className="row justify-content-md-center">
        {cards.map((card, key) => {
          return (
            <div className="col-xs-8 col-sm-6 col-md-3" key={key}>
              <Card style={style}>
                <Card.Img variant="top" src={card.primaryMediaUrl} style={style} />
                <Card.Body style={style}>
                  <Card.Text>
                    <TextEllipsis lines={2} 
                      ellipsisChars={'...'} >{card.cardDescription}
                    </TextEllipsis>
                  </Card.Text>
                  <small>{card.listOfPlans[0].price.currencySymbol} {card.listOfPlans[0].price.amount} / Month</small>
                  <ProgressBar now={card.likes} />
                </Card.Body>
                <Card.Footer className="text-muted" style={style}>
                  <i className="fas fa-user-friends"></i>{card.shares}
                  <i className="far fa-eye"></i>{card.views}
                </Card.Footer>
            </Card>
            </div>
          );
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="cards container" style={divStyle}>
        {this.renderCards()}
        {this.renderEmptyCard()}
      </div>
    );
  }
}

Cards.propTypes = {
  //cards: PropTypes.array.isRequired
};
