import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu (props) {

  function renderMenu() {
    return props.items.map((item, key) => {
      return (
        <NavLink to={ item.link } activeClassName='active' className = { `sidebar-nav__item ${ item.iconStyle }` }  key = { key }>{ item.name }</NavLink>
      );
    });
  }

  return (
    <nav className="sidebar-nav">
      { renderMenu() }
    </nav>
  );
}


export default Menu;
