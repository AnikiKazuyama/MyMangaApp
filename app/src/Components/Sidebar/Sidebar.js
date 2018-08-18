import React, { Component } from 'react';

import './style/index.css';

class Sidebar extends Component {
  render() {
    return (
      <aside className="site-sidebar">
        { this.props.children }
      </aside>
    );
  }

}

export default Sidebar;
