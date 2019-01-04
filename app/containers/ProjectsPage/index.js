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
  position: relative;
  &:hover {
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 99.3%;
      height: 99%;
      background-color: rgba(0, 0, 0, 0.5);
      left: 2px;
      top: 2px;
      cursor: pointer;
    }
    &::after {
      color: white;
      position: absolute;
      content: 'See more';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.3em;
    }
  }
`;

const _H1 = styled.h1`
    text-align:center;
    color:white;
    margin-top:100px;
`;

const A = styled.a`
    color:white;
    font-size:30px;
    &:hover{
        color:white;
        text-decoration:underline;
    }
`;

const LinkWrapper = styled.div`
    position:relative;
    top:55%;
`;

const XIcon = styled.i`
    position:absolute;
    color:white;
    top:5%;
    left:93%;
    z-index:56;
    font-size:55px;
    transition: 0s all;
    cursor:pointer;
`;

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.hideDiv = this.hideDiv.bind(this);
    this.state = {
        img:'',
        header:'',
        info: '', 
        link: '', 
        languages:''
    }

  }

  onClick(e) {
    if($(e.target).data('id') == 0){
        this.setState({
            img: pr1,
            header:'Boostyourelo.org',
            info:'Boostyourelo.org is a company that offers E-Sport enthusiasts an opportunity to improve and get ranked better on the competetive ladder',
            link:'http://www.boostyourelo.org',
            languages: 'HTML, CSS, jQuery, Laravel, Vue'
        },function(){
            $(".showDiv").stop().show("slow"); 
        });
    }else if($(e.target).data('id') == 1){
        this.setState({
            img: pr1,
            header:'Gl Mlinar',
            info:'Gl Mlinar is a factory ',
            link:'http://www.gl-mlinar.rs',
            languages: 'HTML, CSS, jQuery'
        },function(){
            $(".showDiv").stop().show("slow"); 
        });      
    }
  }

  hideDiv(){
    $(".showDiv").stop().hide("slow");
  }
  render() {
    var info = this.state.info;
    var link = this.state.link;
    var languages = this.state.languages;
    var header = this.state.header;
    return (
      <Wrapper>
        <H1>Projects</H1>
        <div className="container-fluid">
          <div className="showDiv">
            <XIcon onClick={this.hideDiv} className="fas fa-times"></XIcon>
            <_H1>{header}</_H1>
            <p style={{position:'relative', top:'30%',color:'white',fontSize:'25px', padding:'0 40px'}}>{info}</p>
            <LinkWrapper>
                <A href={link}>{link}</A>
            </LinkWrapper>
            <p style={{position:'relative', top:'60%',color:'white',fontSize:'25px'}}>{languages}</p>
          </div>
          <div>
              <div className="row pr1" style={{ animationDelay: '.4s' }}>
                <div className="col-sm-6">
                  <Container data-id="0" onClick={this.onClick}>
                    <PR style={{ backgroundPosition: '3% 50%' }} img={pr1} />
                  </Container>
                </div>
                <div className="col-sm-6">
                  <Container data-id="1" onClick={this.onClick}>
                    <PR img={pr2} />
                  </Container>
                </div>
              </div>
              <div className="row pr2" style={{ animationDelay: '.7s' }}>
                <div className="col-sm-6">
                  <Container data-id="2" onClick={this.onClick}>
                    <PR img={pr3} />
                  </Container>
                </div>
                <div className="col-sm-6">
                  <Container data-id="3" onClick={this.onClick}>
                    <PR img={pr4} />
                  </Container>
                </div>
              </div>
            </div>
        </div>
      </Wrapper>
    );
  }
}
export default ProjectsPage;
