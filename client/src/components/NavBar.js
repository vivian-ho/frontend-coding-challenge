import React, {Component, Fragment} from 'react';
import {Badge, Button, Navbar} from 'react-bootstrap';
import '../styles/NavBar.css';
import Campaigns from '../containers/Campaigns';
import ListView from '../containers/ListView';

const topBarStyle = {
    backgroundColor: '#f0f0f0'
};

const topBarLeftStyle = {
    backgroundColor: '#f0f0f0',
    width: '30rem'
};

const inputStyle = {
    float: 'left',
    width: '20rem',
    border: '1px solid #f0f0f0',
    backgroundColor: '#f0f0f0'
};

const searchStyle = {
    margin: '0 0 1rem 0',
    float: 'left',
    width: '5rem'
};

const listStyle = {
    float: 'left',
    width: '5rem',
    border: '1px solid black'
};

const calendarStyle = {
    float: 'left',
    width: '18rem'
};

const pillStyle = {
    float: 'left',
    width: '5rem'
};

const textStyle = {
    float: 'left',
    width: '5rem'
};

const fragmentStyle = {
    float: 'left',
    width: '5rem'
};

const dateStyle = {
    float: 'left',
    width: '10rem',
    margin: '0 0 0 1rem'
};

const divStyle = {
    float: 'left'
};

class NavBar extends Component {

  state = {
    campaigns: [],
    currentCampaign: '',
    isOpen: false,
  };

  componentDidMount() {
    
  }
   
  

  handleUpdate = (e) => {
    
  }

  renderNavbar = () => {
    const date = new Date();
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const calendar = <Fragment>
                      <div style={divStyle}><i className="fas fa-angle-left text-danger"></i></div>
                      <div style={divStyle}><i className="far fa-calendar text-danger"></i></div>
                      <div style={dateStyle} className="calendar-date text-danger">Today, {months[date.getMonth()]} {date.getDate()}</div>
                      <div style={divStyle}><i className="fas fa-angle-right text-danger"></i></div>
                    </Fragment>;

    const pill = <div><Badge pill variant="danger">{date.getDay()}d</Badge></div>;
    return (
        <div className="top-bar" style={topBarStyle}>
          <div  style={topBarLeftStyle}>
                <Campaigns></Campaigns>
            </div>
          <div className="top-bar-right">
            
            <div style={listStyle}>
                <i className="fas fa-list"></i>
                
            </div>
            <div style={inputStyle}>
                <ListView></ListView>
                
            </div>
            <div style={searchStyle}>
                <Button variant="outline-success"><i className="fas fa-search"></i></Button>
            </div>
            
            <div style={calendarStyle}>
                {calendar}
            </div>
            <div style={pillStyle}>
                {pill}
            </div>
          </div>
        </div>
        
    );
  }

  render() {
    return (
      <div>
        {this.renderNavbar()}
      </div>
    );
  }
}

export default NavBar;
