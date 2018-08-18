import React from 'react';
import { Link } from 'react-router-dom';

import generator from 'randomcolor';

function MenuGenres (props) {

  function renderMenu() {
    return props.items.map((item, key) => {
      const color = generator();
      return (
        <span className="sidebar-sections__item" key = { key }>
          <div className="sidebar-sections__item-circle" style={ { backgroundColor: color } }></div>
          <Link to={ item.link }>{ item.name }</Link>
        </span>
      );
    });
  }

  return (
    <nav className="sidebar-sections">
      { renderMenu() }
    </nav>
  );
}


export default MenuGenres;
