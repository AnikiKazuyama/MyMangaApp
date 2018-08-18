import React, { Component } from 'react';

class Profile extends Component {

  constructor() {
    super();

    this.state = {
      isProfileMenuOpen: false
    };
  }

  render() {
    const { name, icon } = this.props;

    return (
      <div className="header-menu__profile" onClick = { this.toggleProfileMenu }>
        <div className="header-menu__profile-avatar" style={{ backgroundImage: `url(${ icon })` }}></div>
        <div className="header-menu__profile-container">
          <div className="header-menu__profile-overflow">
            <span className="header-menu__profile-name">{ name }</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
