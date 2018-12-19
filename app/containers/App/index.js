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
// import $ from 'jquery';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Footer from 'components/Footer';
import { Header } from 'components/Header';
import AboutPage from 'containers/AboutPage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import SkillsPage from 'containers/SkillsPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const divStyle = {
  padding: '0',
};

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s | Portfolio"
        defaultTitle="Đorđe Jevremović | Portfolio"
      >
        <meta name="description" content="Đorđe Jevremović - Portfolio" />
      </Helmet>
      <Switch>
        <Route exact path="/">
          <div className="container-fluid" style={divStyle}>
            <div className="row page-1 active" style={{ margin: '0' }}>
              <div className="col-sm-12" style={{ padding: '0' }}>
                <Header />
              </div>
            </div>
            <div
              className="row page-2"
              style={{ margin: '0', display: 'block' }}
            >
              <div className="col-sm-12" style={{ padding: '0' }}>
                <AboutPage />
              </div>
            </div>
            <div
              className="row page-3"
              style={{ margin: '0', display: 'block' }}
            >
              <div className="col-sm-12" style={{ padding: '0' }}>
                <ProjectsPage />
              </div>
            </div>
            <div
              className="row page-4"
              style={{ margin: '0', display: 'block' }}
            >
              <div className="col-sm-12" style={{ padding: '0' }}>
                <SkillsPage />
              </div>
            </div>
            <div
              className="row page-5"
              style={{ margin: '0', display: 'block' }}
            >
              <div className="col-sm-12" style={{ padding: '0' }}>
                <ContactPage />
              </div>
            </div>
          </div>
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
