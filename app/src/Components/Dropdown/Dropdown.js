import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';

import './style/index.css';

class Dropdown extends Component {

  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.height = null;
    this.menu = createRef();
    this.toggler = createRef();
  }

  componentDidMount() {
    this.initEvent();

    this.height = this.calcHeight();
  }

  componentWillUnmount() {
    this.removeEvent();
  }

  render() {
    const isOpen = this.state.isOpen;
    const style = isOpen ? { height: `${ this.height }px` } : {} ;
    return (
      <div className = 'dropdown'>
        <div className = 'dropdown__toggle' onClick = { this.toggleMenu } ref = { this.toggler }>
          { this.props.children }
        </div>
        <div 
          className = 'dropdown__menu'
          ref = { this.menu } 
          style = { style }>
          { this.renderMenu() }
        </div>  
      </div>
    );
  }

  renderMenu() {
    const { items } = this.props;

    return items.map((item, key) => {
      return (
        <Link className = 'dropdown__item' to={ item.link } key = { key }>{ item.name }</Link>
      );
    });
  }

  toggleMenu = () => {
    this.setState(( prevState ) => {
      return ({
        isOpen: !prevState.isOpen
      });
    });
  }

  calcHeight() {
    const menu = this.menu.current;
    let height = 0;
    for (let i = 0; i < menu.childElementCount; i++)
      height += menu.children[i].offsetHeight;

    return height;
  }

  handleOutClick = (event) => {
    const menu = this.menu.current;
    const toggler = this.toggler.current;
    if(!menu.contains(event.target) && 
       !toggler.contains(event.target)) {
      this.setState({
        isOpen: false
      });
    }
  }

  initEvent() {
    const body = document.body;

    body.addEventListener('click', this.handleOutClick);
  }

  removeEvent() {
    const body = document.body;

    body.removeEventListener('click', this.handleOutClick);
  }
}

export default Dropdown;
