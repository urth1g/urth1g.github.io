import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import List from './List';
import ListItem from './ListItem';

import Pic from '../../images/pic.jpg';

import store from './reducer';

let state = store.getState();

const NAV = styled.nav`
  position: relative;
  height: auto;
  left: 0;
  padding: 5px;
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
const Shadow = keyframes`
    0%{
    		box-shadow:inset 80px -80px 50px 23px rgba(0,0,0,0.5);
    }
    20%{
    		box-shadow:inset 80px -80px 50px -53px rgba(0,0,0,0.5);
    }
    40%{
    		box-shadow:inset 80px -80px 50px -53px rgba(0,0,0,0.5);
    }
    60%{
    		box-shadow:inset 80px -80px 50px -53px rgba(0,0,0,0.5);
    }
    80%{
    		box-shadow:inset 80px -80px 50px 23px rgba(0,0,0,0.5);
    }
    100%{
    	box-shadow:inset 80px -80px 50px 23px rgba(0,0,0,0.5);
    }

`;

const Overlay = styled.div`
  box-shadow: inset 80px -80px 50px 23px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 300px;
  position: absolute;
  display: block;
  border-radius: 50%;
  animation: ${Shadow} 7s linear infinite;
  animation-delay: 0.2s;
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
        style={{ border: '3px solid white' }}
        width="300"
        height="300"
        className="rounded-circle"
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
