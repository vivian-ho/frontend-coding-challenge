import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListViewComponent from '../components/ListView';

class ListView extends Component {
  state = {
    filters: []
  };

  componentWillMount() {
    // fetch filters from server
    this.fetchFilters()
      .then(res => {
        this.setState({ filters: res });
        return res;
      })
      .catch(err => console.log(err));
  };

  // fetch our GET route from the Express server
  fetchFilters = async () => {
    const response = await fetch('/api/getFilters');
    
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body;
  };

  render() {
    return <ListViewComponent {...this.state}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ListView);