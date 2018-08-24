import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Button, FontIcon, Grid } from 'react-md';

import { withMainComponent } from '../hoc';

import { Search } from '../search';
import Bar from './Bar';
import Footer from './Footer';

class Home extends Component {
    isGoing(user) {
        this.props.isGoing(user); 
    }
    fetchData = () => {
        this.props.getBars(); 
    }
    render() {
        const { foods, isGoing, isSearch } = this.props;
      
        if (foods.length === 0 && !isSearch) {
            return (
                <div className="md-grid" style={{ marginTop: 90 }}>
                    <header className="md-cell md-cell--12" style={{height: '100%'}}>
                    <h1 className="md-cell md-cell--12  md-text-center" >Welcome, Do you have plan for night outing? </h1> 
                    <h2 className="md-cell md-cell--12  md-text-center"> Start by supplying your location in the search bar, and get the best place in your area. </h2>
                    </header>
                </div >             
            );
        }
        if (foods.length === 0 && isSearch) {
            return (
                <div className="cards" style={{ marginTop: 60 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 80}}>
                      <img src="/img/loading.gif" />
                    </div>
                </div>
            ); 
        }
        return (
                <div className="cards" style={{marginTop: 60}}>
                    {
                        foods.map((food, i) => {
                            let props = { ...food, isGoing };
                            return (
                                <Bar
                                    key={food.bussid}
                                    {...props}
                                />
                            )
                        })
                    }
                  <Footer />
                </div>
        );
    }
  }  
Home.PropTypes = {
    isGoing: PropTypes.func.isRequired,
    foods: PropTypes.arrayOf(PropTypes.object),
    isSearch: PropTypes.bool.isRequired
}

export default withMainComponent(Home);
