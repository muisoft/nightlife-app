import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, FontIcon, Autocomplete } from 'react-md';

import { withMainComponent, withResponsive } from '../hoc';

class Search extends Component  {
        state = {
            isFocus: false,
            value: '',
            location: ''
        }
   
    handleClearSearch = () => {
        this.setState({ location: '', isFocus: false });
    } 
    handleSearchChange = (e) => {
          const target = e.target;
          const name = target.name;
          const value = target.value;
          this.setState({
              [name]: value,
              isFocus: true
          });

        if (e.target.value === "") {
            this.setState({ isFocus: false });        
        }
    }
   
render(){
    let { isMobile, isTablet, isDesktop, onSearch } = this.props;
    let { isFocus, location } = this.state;
        let styles;
        if (isMobile) {
            styles = {
                width: 240,
                height: 30,
            
            }
        } else if (isTablet) {
            styles = {
                width: 310
            }
        } //else if (isDesktop) {
            //styles = {
               // width: '750px'
           // }
        //}// else if( !isMobile && !isTablet && !isMobile) {
           // console.log('Size: '+size);
           // styles = {
             // width: 240,
              // marginLeft: '1%'
        // }
       // }
    
          return (
             <div className="md-grid">
                  <div className="search-wrapper" style={styles}>
                  <Button id="search" icon onClick={() => onSearch(location)}>search</Button>
                      <input
                          id="searchInput"
                          type="text"
                          name="location"
                          value={location}
                          onInputCapture={this.handleSearchChange}
                          placeholder="Where are you?"
                      />
                      {
                          isFocus ? 
                          <Button id="clear" icon onClick={this.handleClearSearch}>close</Button>
                          : ''
                        }
                      </div>
              </div>
          )
        }
}

Search.PropTypes = {
    isMobile: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    onSearch: PropTypes.func.isRequired
}
const getWidth = ({ width }) => { 
    return { 
        isMobile: width < 480, 
        isTablet: ( width >= 480 && width <= 1024), 
        isDesktop: width > 1024 
    };
}    
export default withResponsive(withMainComponent(Search));
