import React, { Component, Fragment } from 'react';

import HeaderContainer from './Containers/HeaderContainer';
import SidebarContainer from './Containers/SidebarContainer';
import Main from './Components/Main';

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer/>
          <Main/>
        <SidebarContainer/>
      </Fragment>
    );
  }
}

export default App;
