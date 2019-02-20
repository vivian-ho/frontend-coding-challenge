import React, { Component } from 'react';
import PropTypes from 'prop-types';

const listStyle = {
    backgroundColor: '#f0f0f0',
    width: '5rem'
};

export default class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('e', this.state.currentFilter, e.target.value);
    this.setState({ currentFilter: e.target.value });
    this.updateWorkflow(e.target.value)
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));

  }

  // call PUT to update workflow
  updateWorkflow = async (currentFilter) => {
    const formData = new FormData();
    formData.append('state', currentFilter);

    const response = await fetch(`/api/transfer/${localStorage.getItem('currentCampaign')}/${currentFilter}`, {
        method: 'PUT',
        body: formData
    })
    
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body;
  };

  render() {
    const filters = this.props.filters || [];
    console.log('filters', filters);
    const list = [];
    filters.forEach((filter) => {
      list.push(<option key={filter} value={filter}>{filter}</option>);
    });
    return (
        <select style={listStyle} className='dropdown' onChange={this.handleChange} value={this.state.currentFilter}>{list}</select>
    );
  }
}

ListView.propTypes = {
  filters: PropTypes.array.isRequired
};
