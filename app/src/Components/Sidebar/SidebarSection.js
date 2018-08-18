import React, { Component } from 'react';

class SidebarSection extends Component {
  render() {
    const isPaddingOff = this.props.paddingOff;
    const padStle = isPaddingOff ? 'padding-off' : '';

    return (
      <div className={ `site-sidebar__item ${ padStle }` }>
        { this.props.children }
      </div>
    );
  }

}

export default SidebarSection;
