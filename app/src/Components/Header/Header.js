import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Profile from './Profile';
import Dropdown from '../Dropdown';

import { header, common } from '../../constants';
import defaultAvatar from '../../Assets/img/default-avatar.svg';

import './style/index.css';

class Header extends Component {

  render() {
    return (
      <header className="site-header">
        <div className="header-dots">
          <div class="dot" />
          <div class="dot" />
          <div class="dot" />
        </div>
        <Link to="/" className="header-logo">{ common.logo }</Link>
        <div className="header-menu">
          <nav className="header-menu__nav">
            <Link to="/" className="header-menu__nav-item">{ header.nav.help }</Link>
            <Link to="/" className="header-menu__nav-item">{ header.nav.support }</Link>
          </nav>
          <Dropdown items = { this.props.items }>
            <Profile name = { this.props.name } icon = { defaultAvatar }/>
          </Dropdown>
        </div>
      </header>
    );
  }

}

export default Header;
