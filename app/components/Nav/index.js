import React from 'react';

import styled, { keyframes } from 'styled-components'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
import $ from 'jquery';
import List from './List';
import ListItem from './ListItem';

import Pic from '../../images/slika2.jpg';

import store from './reducer';

let state = store.getState();

const NAV = styled.nav`
  position: relative;
  height: auto;
  left: 0;
  padding: 0px;
  z-index: 2;
  text-align: center;
`;

const A = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: lightblue;
  }
`;

const Overlay = styled.div`
  box-shadow: inset 80px -80px 50px 23px rgba(0, 0, 0, 0.5);
  width: 150px;
  height: 250px;
  position: absolute;
  display: block;
  border-radius: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

function Img() {
  return (
    <div
      className="imgWrapper"
      style={{
        left: '50%',
        textAlign: 'center',
        width: '300px',
        transform: 'translateX(-50%)',
        position: 'relative',
        display: 'inline-block',
      }}
    >
      <Overlay />
      <img
        style={{ border: '3px solid white', borderRadius: '25px' }}
        width="150"
        height="250"
        alt="pic"
        src={Pic}
      />
    </div>
  );
}
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    const page = `.${$(e.target).data('page')}`;
    if (page !== state.get('page')) {
      $('.active').addClass('zoomOutLeft animated');
      $('.active').one('animationend', () => {
        $('.active').css({ display: 'none' });
        $('.active').removeClass('zoomOutLeft animated');
        $('.active').removeClass('active');
        $(page).addClass('zoomInLeft animated');
        $(page).css({ display: 'block' });
      });
      $(page).one('animationend', () => {
        $(page).removeClass('zoomInLeft animated');
        $(page).addClass('active');
      });
      store.dispatch({
        type: 'SET_PAGE',
        page,
      });

      state = store.getState();
    }
  }

  render() {
    return (
      <NAV>
        <List>
          <ListItem>
            <A
              onClick={this.onClick}
              ref={this.page1}
              data-page="page-1"
              to="/"
            >
              Home
            </A>
          </ListItem>
          <ListItem>
            <A
              onClick={this.onClick}
              ref={this.page2}
              data-page="page-2"
              to="/"
            >
              About me
            </A>
          </ListItem>
          <ListItem>
            <A
              onClick={this.onClick}
              ref={this.page3}
              data-page="page-3"
              to="/"
            >
              Resume
            </A>
          </ListItem>
          <ListItem>
            <A
              onClick={this.onClick}
              ref={this.page4}
              data-page="page-4"
              to="/"
            >
              Projects
            </A>
          </ListItem>
          <ListItem>
            <A
              onClick={this.onClick}
              ref={this.page5}
              data-page="page-5"
              to="/"
            >
              Contact
            </A>
          </ListItem>
        </List>
      </NAV>
    );
  }
}

export { Nav, Img };
