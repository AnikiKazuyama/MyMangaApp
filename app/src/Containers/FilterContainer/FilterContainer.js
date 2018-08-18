import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Filter from '../../Components/Main/MainHeader/Filter';

const FilterWithRouter = withRouter(Filter);

class FilterContainer extends Component {
  render() {
    return <FilterWithRouter/>
  }
}

export default FilterContainer;
