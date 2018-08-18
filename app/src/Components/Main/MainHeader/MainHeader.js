import React, { Component } from 'react';

import FilterContainer from '../../../Containers/FilterContainer/FilterContainer';

import { mainHeader } from '../../../constants';
import './style/index.css';

class MainHeader extends Component {
  render() {
    return(
      <section className="main-header">
        <span className="main-header__title">{ mainHeader.catalogTitle }</span>
        <FilterContainer/>
      </section>
    );
  }
}

export default MainHeader;
