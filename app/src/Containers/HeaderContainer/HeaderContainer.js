import React, { Component } from 'react';

import Header from '../../Components/Header';

import items from './items/dropdownItems';

class HeaderContainer extends Component {
  render() {
    const name = 'NAGIBATOR2000';
    return <Header items = { items } name = { name } />
  }
}

export default HeaderContainer;
