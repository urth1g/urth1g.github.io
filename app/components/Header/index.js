import React from 'react';
import { FormattedMessage } from 'react-intl';

import {Nav, Img} from '../Nav/index.js';

import styled from 'styled-components';
import BgImg from '../../images/bg.jpg';

const Wrapper = styled.div`
    background: url(${BgImg});
    background-size:cover;
    width:100%;
    position:relative;
    background-position:center bottom;
    background-repeat:no-repeat;
    min-height:100vh;
`;
const Overlay = styled.div`
    background: linear-gradient(rgba(0,0,0,0.6) 15%, rgba(0,0,0,0.1) 40%);
    position:absolute;
    width:100%;
    height:100vh;
`;

const H1 = styled.h1`
    color:white;
    text-align:center;
    margin-top:20px;
    font-family: Nunito,sans-serif;
    font-size:50px;
    text-shadow: -5px 5px 15px rgba(0,0,0,1);
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <Wrapper>
          <div id="sun"></div>
          <Overlay />
          <Nav />
          <Img />
          <H1>Djordje Jevremovic</H1>
          <H1 style={{marginBottom:0}}>Junior Web Developer</H1>
      </Wrapper>
    );
  }
}

export default Header;
