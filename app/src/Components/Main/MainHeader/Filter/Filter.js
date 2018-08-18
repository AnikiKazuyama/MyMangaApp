import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { filter } from '../../../../constants';

class Filter extends Component {
  render() {
    const { match } = this.props;

    return(
      <div className="main-header__filters">
        <nav className="main-header__filters-nav">
          <NavLink to={ `${match.url}` } activeClassName="active">{ filter.all }</NavLink>
          <NavLink to={ `${match.url}/rating` } activeClassName="active">{ filter.raiting }</NavLink>
          <NavLink to={ `${match.url}/popular` } activeClassName="active">{ filter.popular }</NavLink>
          <NavLink to={ `${match.url}/recent` } activeClassName="active">{ filter.recent }</NavLink>
        </nav>
        <form className="main-header__filters-search">
          <input type="text" placeholder={ filter.search }/>
          <button type="submit" className="search-ico"/>
        </form>
      </div>
    );
  }
}

export default Filter;
