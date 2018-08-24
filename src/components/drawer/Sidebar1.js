import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, Toolbar, Button } from 'react-md';
import { withMainComponent } from '../hoc';



const Sidebar = ({ visible, closeDrawer, navItems , handleVisibilityChange}) => {
    console.log('GG: '+ visible);
    
    return (
        <Drawer
            id="sidebar"

            mobileType={Drawer.DrawerTypes.TEMPORARY}
            visible={visible}
            position="left"
            onVisibilityChange={handleVisibilityChange}
            navItems={navItems}
            autoclose="true"
            header={
                <Toolbar
                    id="side"
                    nav={<Button icon onClick={closeDrawer}>arrow_back</Button> }
                    title="Nightlife App"
                    className="md-divider-border md-divider-border--bottom"
                />
            }
        />
    );
}

Sidebar.PropTypes = {

}

export default Sidebar;
