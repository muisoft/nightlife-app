import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { AppToolbar } from './toolbar';
import { Drawer } from './drawer';
import { Routes } from './routes';
import { withResponsive } from './hoc';


const navItems = [
    {
        label: 'Home',
        to: '/',
        icon: 'home'
    },
    {
        label: 'Account',
        to: '/account/:type',
        icon: 'account_circle'
    }
]
class App extends Component {
    
    render() {
        let { isMobile} = this.props;
        
        const drawerProps = (location) => ({
            location: location,
            navItems: navItems,
            children: <Routes />
        })
        
        return (
            <div>
                <Route
                    render={({ location }) => {
                        let key = {...location.key};
                        let props = {...location, key};
                        return (
                        <div>
                            {isMobile ? <Drawer {...drawerProps(location)} /> :
                                <div>
                                    <AppToolbar {...location} />
                                    <Routes {...props} />
                                </div>
                            }
                        </div>
                        )}} />
            </div>
        );
    }
}

export default withResponsive(App);