import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  FontIcon,
  AccessibleFakeButton,
  IconSeparator,
  DropdownMenu,
  ListItem
} from 'react-md/lib';

import { withMainComponent } from '../hoc';

const AccountMenu = ({ simplifiedMenu, username, image, signout }) => {
  return (
    <DropdownMenu
      id='account-menu'
      menuItems={[<ListItem key="signout" primaryText="Signout" onClick={signout} />]}
      anchor={{
        x: DropdownMenu.HorizontalAnchors.RIGHT,
        y: DropdownMenu.VerticalAnchors.BOTTOM,
      }}
      position={DropdownMenu.Positions.BELOW}
      animationPosition="below"
      sameWidth
      simplifiedMenu={simplifiedMenu}
    >
      <AccessibleFakeButton
        component={IconSeparator}
        iconBefore
        label={
          <IconSeparator label={username} style={{ fontSize: 18, lineHeight: 2.7 }}>
            <FontIcon>arrow_drop_down</FontIcon>
          </IconSeparator>
        }>
        <Avatar src={image ? image : ''}>{!image ? username[0] : ''}</Avatar>
      </AccessibleFakeButton>
    </DropdownMenu>
  );
}

AccountMenu.propTypes = {
  simplifiedMenu: PropTypes.bool,
  username: PropTypes.string,
  image: PropTypes.string,
  handleSignout: PropTypes.func.isRequired 
};

export default withMainComponent(AccountMenu);
