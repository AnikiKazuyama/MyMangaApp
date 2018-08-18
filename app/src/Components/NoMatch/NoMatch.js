import React, { Component } from 'react';

import './style/index.css';

class NoMatch extends Component {
  render() {
    return(
      <div className = 'nomatch'>
        {/* <div className = 'nomatch__sad-face'></div> */}
        {/* <div className = 'nomatch__content'>
          <h1 className = 'nomatch__title'>Упс!</h1>
          <span className = 'nomatch__ps'>Мы извиняемся! Эта страница не найдена</span>
        </div> */}
      </div>
    );
  }
}

export default NoMatch;
