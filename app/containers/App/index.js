/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import $ from 'jquery';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import {Header} from 'components/Header';
import AboutPage from 'containers/AboutPage/Loadable';
import {Nav} from 'components/Nav/index.js';

import GlobalStyle from '../../global-styles';


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

var divStyle = {
  padding: '0'
}

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s | Portfolio"
        defaultTitle="Đorđe Jevremović | Portfolio"
      >
        <meta name="description" content="Đorđe Jevremović - Portfolio" />
      </Helmet>
      <div className="container-fluid" style={divStyle}>
        <div className="row page-1 active" style={{margin:'0'}}>
          <div className="col-sm-12" style={{padding:'0'}}>
            <Header />
          </div>
        </div>
        <div className="row page-2" style={{margin:'0', display:'none'}}>
          <div className="col-sm-12" style={{padding:'0'}}>
            <AboutPage />
          </div>
        </div>        
      </div>
      <GlobalStyle />
    </AppWrapper>
  );
}
