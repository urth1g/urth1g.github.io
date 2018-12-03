import React from 'react';
// import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';
import SunSpotGenerator from 'components/SunSpot';
import SunSpot from 'components/SunSpot/SunSpot';

// import $ from 'jquery';
import BgImg from '../../images/bg.jpg';
import { Nav, Img } from '../Nav';

const Wrapper = styled.div`
  background: url(${BgImg});
  background-size: cover;
  width: 100%;
  position: relative;
  background-position: center bottom;
  background-repeat: no-repeat;
  min-height: 100vh;
`;
const Overlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.25) 15%, rgba(0, 0, 0, 0.1) 40%);
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const H1 = styled.h1`
  color: white;
  text-align: center;
  margin-top: 20px;
  font-family: Nunito, sans-serif;
  font-size: 50px;
  text-shadow: -5px 5px 15px rgba(0, 0, 0, 1);
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { circlePos: SunSpotGenerator() };
  }

  render() {
    const a = this.state.circlePos;

    return (
      <Wrapper>
        <div
          style={{
            overflow: 'hidden',
            position: 'absolute',
            height: '500px',
            width: '100%',
          }}
        >
          {a.map(x => (
            <SunSpot
              className="sunspot"
              key={x.leftPosition + x.topPosition}
              leftPosition={`${x.leftPosition}px`}
              topPosition={`${x.topPosition}px`}
              radius={x.radius}
              spread={x.spread}
              color={x.color}
            />
          ))}
        </div>
        <div id="sun" />
        <Overlay />
        <Nav />
        <Img />
        <H1>Djordje Jevremovic</H1>
        <H1 style={{ marginBottom: 0 }}>Junior Web Developer</H1>
      </Wrapper>
    );
  }
}

export { Header };
