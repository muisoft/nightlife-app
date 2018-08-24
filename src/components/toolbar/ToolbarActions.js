import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md/lib';

import { withMainComponent } from '../hoc';
import { AccountMenu } from '../account';

const ToolbarActions = ({ gotoLogin, gotoHome, pathname, user }) => {
    const actions = () => {
            if (user.username) {
                return (
                    <div>
                        <Button icon onClick={gotoHome}>home</Button>
                        <AccountMenu
                            simplifiedMenu
                            username={user.username} />
                    </div>
                )
            } else {
                return (
                    <div>
                        <Button icon onClick={gotoHome}>home</Button>
                        <Button icon onClick={gotoLogin}>account_circle</Button>
                    </div>
                )
        }
    }
    return (
        <div style={{ lineHeight: 3, fontSize: 18 }}>
            {actions()}
        </div>
    );
}

ToolbarActions.PropTypes = {
    gotoLogin: PropTypes.func.isRequired,
    gotoHome: PropTypes.func.isRequired,
    pathname: PropTypes.string,
    user: PropTypes.object,
}

export default withMainComponent(ToolbarActions);