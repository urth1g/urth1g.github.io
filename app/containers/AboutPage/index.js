import React from 'react';
import styled from 'styled-components';
// import $ from 'jquery';
// import { Nav } from 'components/Nav';
// import Img from 'images/bg1.jpg';
import WebImg from 'images/web2.png';
import P from './p';

/* eslint-disable no-unused-vars */
const Overlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1) 15%, rgba(0, 0, 0, 0.5) 40%);
  position: absolute;
  width: 60%;
  height: 100vh;
  border-radius: 50%;
`;
/* eslint-disable no-unused-vars */

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color:#E5DFEB;
  background-position: 56% 80%;
  background-attachment: fixed;
`;

const ImgContainer = styled.div`
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {}

  render() {
    return (
      <Wrapper>
        <h2 style={{ textAlign: 'center', paddingTop: '25px', color:'#445D81' }}>About me</h2>
        <div className="row">
          <div className="col-sm-6">
            <P>Hello!</P>
            <P>
              My name is Djordje and I am a young web developer from Jagodina
              with a huge passion for programming.
            </P>
            <P>
              My story begins in February 2016, right after I have decided to go
              through with an idea of mine which was giving me an itch for a
              while back then. I found everything that I would need to create my
              business, devoted almost all of my free time to learn the required
              skills, and after 3 months of hard work I have finally watched my
              idea becoming a reality and it felt awesome.
            </P>
            <P>
              After that, I really started to dig programming and to this day,
              I&#39;m still looking on it more as a hobby than as a job. Through
              the years, I have trained myself to work in both LAMP and MERN
              environments and I got a solid grasp of both Front-end and
              Back-end technologies.
            </P>
            <P>Nice to meet you, by the way &#58;&#41;</P>
          </div>
          <div className="col-sm-6">
            <ImgContainer style={{animationDelay:'1s'}} className="img1">
              <img src={WebImg} className="scale" alt="Web Development" />
            </ImgContainer>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default AboutPage;
