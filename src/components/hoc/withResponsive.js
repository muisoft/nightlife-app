import React, { Component } from 'react';
import _ from 'lodash';

const withResponsive = function(ChildComponent) {
    class WithResponsive extends Component {
        constructor(props) {
            super(props);

            this.state = {
                isMobile: false,
                isTablet: false,
                isDesktop: false
            } 
            this.handleWindowResize = this.handleWindowResize.bind(this);
        }
        handleWindowResize(){
                   this.setState({
                    isMobile:  window.innerWidth < 480,
                    isTablet: window.innerWidth >= 480 && window.innerWidth < 1024,
                    isDesktop: window.innerWidth > 1024
                });        
        }
        componentDidMount = () => {
            this.handleWindowResize();
            window.addEventListener('resize', this.handleWindowResize);
        }
        
        
        componentWillUnmount() {
            window.removeEventListener('resize', this.handleWindowResize);
        }
        
        render() {
            let { isDesktop, isMobile, isTablet } = this.state;
            return (
                <ChildComponent
                    isMobile={isMobile}
                    isDesktop={isDesktop}
                    isTablet={isTablet}
                />
            )
        }
    }
    return WithResponsive; 
}

export default withResponsive;