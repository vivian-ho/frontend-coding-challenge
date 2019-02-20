import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampaignsComponent from '../components/Campaigns';

class Campaigns extends Component {
  state = {
    campaigns: []
  };

  componentWillMount() {
    // fetch campaigns from server
    this.fetchCampaigns()
      .then(res => {
        this.setState({ campaigns: res });
        return res;
      })
      .catch(err => console.log(err));
  };

  // fetch our GET route from the Express server
  fetchCampaigns = async () => {
    const response = await fetch('/api/getCampaigns');
    
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body;
  };

  render() {
    return <CampaignsComponent {...this.state}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    campaigns: state.campaigns
  };
};

export default connect(mapStateToProps)(Campaigns);