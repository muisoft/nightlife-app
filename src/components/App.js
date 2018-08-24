import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Toolbar, Button } from 'react-md';
import { Home } from './night';
import { Account } from './account';
import { AppToolbar, ToolbarActions } from './toolbar';
import { Search } from './search';
import { NavLink, Drawer } from './drawer';
import { Routes } from './routes';

import './style/styles.css';
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
        let { isMobile, isDesktop, isTablet } = this.props;
        console.log(`Desktop3: ${isDesktop}  Tablet3: ${isTablet} Mobile3: ${isMobile}`);
       // let { visible } = this.state;
        
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



/** 
<Toolbar

                                title={isMobile ? '' : "Night Outing"}
                                nav={
                                    isMobile ?
                                        <Button
                                            key="open"
                                            icon
                                            onClick={this.openDrawer.bind(this)}>
                                            menu
                            </Button>
                                        : null
                                }
                                fixed
                                colored
                                children={<Search />}
                                actions={!isMobile ? <ToolbarActions {...location} /> : null}>
                            </Toolbar>
                                <Switch key={location.pathname}>
                                <Route exact path={navItems[0].to} location={location} component={Home}/>
                                <Route path="/account/:type" location={location} component={Account} />
                            </Switch>
                            {isMobile ?
                                <Sidebar {...sidebarProps} />: ''}
                        </div>
                    )} />
**/