import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Sidebar, 
  SidebarSection, 
  Menu,
  MenuGenres
} from '../../Components/Sidebar';

import menuItems from './items/menu';
import menuGenresItems from './items/menuGenres';

import { sidebar } from '../../constants';

class SidebarContainer extends Component {
  render() {
    return (
    <Sidebar>
      <SidebarSection>
        <Link to="" className="site-sidebar__item-continue">
          <span>{ sidebar.buttonSidebar }</span>
        </Link>
      </SidebarSection>
      <SidebarSection paddingOff>
        <Menu items = { menuItems } />
      </SidebarSection>
      <SidebarSection>
        <MenuGenres items = { menuGenresItems } />
      </SidebarSection>
    </Sidebar>
    );
  }
}

export default SidebarContainer;
