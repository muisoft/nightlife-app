import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Toolbar, Button } from 'react-md';

import ToolbarActions from './ToolbarActions';
import { Search } from '../search';

class AppToolbar extends Component {
         render(){
             let { location } = this.props;
        return (
            <div>
                <Toolbar
                    id="app-toolbar"
                    title="Night Outing"
                    fixed
                    colored
                    children={<Search />}
                    actions={<ToolbarActions {...location} />}>
                </Toolbar>
            </div>
        );
    }
}

AppToolbar.PropTypes = {
    location: PropTypes.object.isRequired
}

export default AppToolbar;