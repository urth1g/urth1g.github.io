import React from 'react';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';
// import SunSpotGenerator from 'components/SunSpot';
// import SunSpot from 'components/SunSpot/SunSpot';
// import $ from 'jquery';
import CV from 'images/resume.png';
import GrayCV from 'images/resumeGray.png';
import messages from './messages';
import BgImg from '../../images/bg.jpg';
import { Nav, Img } from '../Nav';

const Wrapper = styled.div`
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  position: relative;
  background-position: center bottom;
  background-repeat: no-repeat;
  min-height: 100vh;
  transition: 3s all;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
const Overlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.7) 60%);
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;

const H1 = styled.h1`
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  margin-top: 20px;
  font-family: Nunito, sans-serif;
  font-size: 50px;
  text-shadow: -5px 5px 15px rgba(0, 0, 0, 1);
  animation-delay: ${props => props.delay};
`;

const IconsWrapper = styled.div`
  color: white;
  text-align: center;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 35px;
  font-size: 60px;
  position: relative;
  z-index: 2;
`;

const ResumeDiv = styled.div`
  background: url(${CV});
  background-size: cover;
  background-position: center;
  width: 72px;
  height: 57px;
  background-repeat: no-repeat;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  display: block;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    display: block;
    position: absolute;
    background: url(${GrayCV});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transform: scale(1.063) translateY(-50%);
  }
`;

const IconsDiv = styled.div`
  background-color: rgba(163, 81, 29, 0.5);
  display: inline-block;
  padding: 10px 10px;
  margin: 0 10px;
  height: 113px;
  width: 95px;
  position: relative;
  border-radius: 25px;
  animation-delay: ${props => props.delay};
`;

const A = styled.a`
  display: contents;
  &:hover {
    background-color: gray;
  }
`;

const Info = styled.p`
  position: relative;
  text-align: center;
  color: white;
  z-index: 2;
  margin-bottom: 5px;
`;

const Child = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${BgImg});
  background-size: cover;
  background-attachment: fixed;
  background-position: center bottom;
  background-repeat: no-repeat;
  padding-top: 30px;
  transition: all 3s;
  position: absolute;
`;
/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();

    const a = document.createElement('a');

    a.href = 'download';
    a.click();
  }

  render() {
    return (
      <Wrapper>
        <Overlay />
        <Child>
          <Nav />
          <Img />
          <H1 className="fadeIn animated" delay="0.3s">
            <FormattedMessage {...messages.name} />
          </H1>
          <H1
            className="fadeIn animated"
            delay="0.6s"
            style={{ marginBottom: 0 }}
          >
            <FormattedMessage {...messages.title} />
          </H1>
          <IconsWrapper>
            <IconsDiv className="fadeIn animated" delay="0.8s">
              <A href="https://www.facebook.com/urthiens" target="_blank">
                <i className="fab fa-facebook-square" />
              </A>
            </IconsDiv>
            <IconsDiv className="fadeIn animated" delay="1.1s">
              <A href="skype:live:jevremovicdjordje97?call">
                <i className="fab fa-skype" />
              </A>
            </IconsDiv>
            <IconsDiv className="fadeIn animated" delay="1.4s">
              <A
                href="https://www.linkedin.com/in/djordje-jevremovic-b09a94175/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </A>
            </IconsDiv>
            <IconsDiv
              className="fadeIn animated"
              delay="1.7s"
              style={{ top: '33px' }}
            >
              <ResumeDiv className="resume" onClick={this.onClick} />
            </IconsDiv>
          </IconsWrapper>
          <Info>
            <FormattedMessage {...messages.phone} />
          </Info>
          <Info style={{ marginBottom: '0px' }}>
            <FormattedMessage {...messages.email} />
          </Info>
        </Child>
      </Wrapper>
    );
  }
}

export { Header };
