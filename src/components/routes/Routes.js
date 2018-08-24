import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../night';
import { Account } from '../account';

const Routes = ({location, key}) => {
    
  return (
      <Switch key={key}>
          <Route exact path="/" location={location} component={Home} />
          <Route path="/account/:type" location={location} component={Account} />
      </Switch>
  )
}

Routes.PropTypes = {
  location: PropTypes.object.isRequired
}

export default Routes;
