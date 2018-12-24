import React from 'react';
import styled from 'styled-components'; // eslint-disable-line no-unused-vars
import $ from 'jquery'; // eslint-disable-line no-unused-vars
import pr1 from 'images/pr1.png';
import pr2 from 'images/pr2.png';
import pr3 from 'images/pr3.png';
import pr4 from 'images/pr4.png';
import Wrapper from './Wrapper';
import PR from './ProjectContainer';

const H1 = styled.h1`
  text-align: center;
  padding-top: 25px;
`;

const Container = styled.div`
  width: 100%;
  height: 330px;
`;
const ProjectsPage = () => (
  <Wrapper>
    <H1>Projects</H1>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <Container>
            <PR style={{ backgroundPosition: '3% 50%' }} img={pr1} />
          </Container>
        </div>
        <div className="col-sm-6">
          <Container>
            <PR img={pr2} />
          </Container>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <Container>
            <PR img={pr3} />
          </Container>
        </div>
        <div className="col-sm-6">
          <Container>
            <PR img={pr4} />
          </Container>
        </div>
      </div>
    </div>
  </Wrapper>
);
export default ProjectsPage;
