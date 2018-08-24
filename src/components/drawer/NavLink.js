import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, Route } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';

const NavLink = ({ label, to, exact, icon, user }) => {  
  return (
    <Route path={to} exact={exact}>
      {({ match }) => {
        let leftIcon;
        if (icon) {
          leftIcon = <FontIcon>{icon}</FontIcon>;
        }
     
        return (
          <ListItem
            component={RouterLink}
            active={!!match}
            to={to}
            primaryText={user.username && label === 'Account' ? '' : label}
            leftIcon={user.username && label === 'Account' ? '' : leftIcon}
          />
        );
      }}
    </Route>
  );
}

NavLink.PropTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  exact: PropTypes.string,
  icon: PropTypes.string,
  user: PropTypes.object
}

export default NavLink;

