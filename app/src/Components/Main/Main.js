import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CatalogContainer from '../../Containers/CatalogContainer/CatalogContainer';
import NoMatch from '../../Components/NoMatch';

import './style/index.css';

class Main extends Component {
  render() {
    return(
      <div className='site-main'>
        <Switch>
          <Route exact path='/catalog' component = { CatalogContainer }/>
          <Redirect exact from='/' to='/catalog'/>
          <NoMatch component = { NoMatch }/>
        </Switch> 
      </div>
    );
  }
}

export default Main;
