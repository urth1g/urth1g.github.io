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
  position:relative;
  &:hover{
    &::before{
        content:"";
        position:absolute;
        display:block;
        width:99.3%;
        height:99%;
        background-color:rgba(0,0,0,0.5);
        left:2px;
        top:2px;
        cursor:pointer;

    }
    &::after{
        color:white;
        position: absolute;
        content:"See more";
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        font-size:1.3em;
    }
  }
`;

class ProjectsPage extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        $("body" ).append( "<div class='showDiv'>DSDADASD</div>" );
        $(".showDiv").show("slow");
    }

    render(){
        return(
              <Wrapper>
                <H1>Projects</H1>
                <div className="container-fluid">
                  <div className="row pr1" style={{animationDelay:'.4s'}}>
                    <div className="col-sm-6">
                      <Container onClick={this.onClick}>
                        <PR style={{ backgroundPosition: '3% 50%' }} img={pr1} />
                      </Container>
                    </div>
                    <div className="col-sm-6">
                      <Container>
                        <PR img={pr2} />
                      </Container>
                    </div>
                  </div>
                  <div className="row pr2" style={{animationDelay:'.7s'}}>
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
    }
}
export default ProjectsPage;
