import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavigationDrawer, Button, Toolbar } from "react-md";

import { withMainComponent, withResponsive } from "../hoc";

import { Search } from "../search";
import NavLink from "./NavLink";
import { AccountMenu } from "../account";

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false
    };
  }

  openSearch() {
    this.setState({
      search: !this.state.search
    });
  }
  render() {
    let { navItems, location, children, user } = this.props;
    let { search } = this.state;

    const styles = {
      header: { margin: 10, height: 100, paddingBottom: 20 }
    }
    const navLinkProps = props => {
      return { ...props, user };
    };

    return (
      <NavigationDrawer
        drawerTitle={user.username ? "" : "Nightlife App"}
        toolbarTitle={search ? <Search /> : "Night Outing"}
        drawerHeaderChildren={
          user.username ?
            <div style={styles.header}>
              <AccountMenu 
                simplifiedMenu
                username={user.username}
              />
            </div> : ""
        }
        constantDrawerType={true}
        navItems={navItems.map(props => (
          <NavLink {...navLinkProps(props)} key={props.to} />
        ))}
        toolbarActions={
          <Button icon onClick={this.openSearch.bind(this)}>
            {!search ? "search" : "close"}
          </Button>
        }>
        {children}
      </NavigationDrawer>
    );
  }
}

Drawer.propTypes = {
  navItems: PropTypes.array,
  location: PropTypes.object,
  children: PropTypes.element,
  user: PropTypes.object
};

export default withMainComponent(Drawer);
