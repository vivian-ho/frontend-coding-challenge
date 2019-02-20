import React, { Component } from 'react';
import PropTypes from 'prop-types';

const listStyle = {
    margin: '0 0 1rem 25rem',
    width: '10rem',
    border: '1px solid #c0c0c0',
    backgroundColor: '#f0f0f0'
};

export default class Campaigns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCampaign: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('e', this.state.currentCampaign, e.target.value);
    this.setState({ currentCampaign: e.target.value });
    localStorage.setItem('currentCampaign', e.target.value);
    window.location.reload();
  }

  render() {
    const campaigns = this.props.campaigns || [];
    const list = [];
    campaigns.map((key, i) => {
      list.push(<option key={key.id} value={key.id}>{key.campaignName}</option>);
    });
    return (
        <select style={listStyle} className='dropdown' onChange={this.handleChange} value={this.state.currentCampaign}>{list}</select>
    );
  }
}

Campaigns.propTypes = {
  campaigns: PropTypes.array.isRequired
};
