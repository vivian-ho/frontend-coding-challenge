import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Switch, Route, Redirect } from 'react-router-dom';
//import { parse } from 'query-string';
//import Loadable from 'react-loadable';

import Cards from '../containers/Cards';
import NavBar from '../components/NavBar';

export class AppContainer extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    
    return (
      <div>
        <NavBar></NavBar>
        <Cards></Cards>
      </div>
    );
  }
}

//AppContainer.propTypes = {
  
//};

export const mapStateToProps = state => ({
  
});

export const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);