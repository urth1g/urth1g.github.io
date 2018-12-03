import React from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';
import P from './p.js';
import {Nav} from 'components/Nav/index.js';
import Img from 'images/bg1.jpg';

const Overlay = styled.div`
    background: linear-gradient(rgba(0,0,0,0.25) 15%, rgba(0,0,0,0.25) 40%);
    position:absolute;
    width:100%;
    height:100vh;
`;

const Wrapper = styled.div`
	position: relative;
	height:100vh;
	width:100%;
	background-image: url(${Img});
	background-position: 56% 80%;
`;

const animation = keyframes`
  0% { top: 0; left:0; }
  20% { top: 25%; left:10%;}
  40% { left:25%; top: 83%;}
  60% { left: 60%; top: 48%;}
  80% { left: 80%; top: 80%; }
  100%{ left: 65%; top: 50%;}
`;

const Light = styled.div`
	position: absolute;
	width:100px;
	height:100px;
	background: rgba(255,255,255,1);
	animation: ${animation} 5s forwards;
	box-shadow: 0px 0px 50px 0px rgba(255,255,255,1);
	z-index:0;
	transition:2s all;
	border-radius:50%;
`;
function Pic(){
	return(
		<div className="imgWrapper" style={{left:'50%','textAlign':'center',width:'300px',transform:'translateX(-50%)', position:'relative',display:'inline-block'}}>
			<img style={{border:'3px solid white'}} width="300" height="300" className="rounded-circle" alt="pic" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/800px-Flag_of_Serbia.svg.png'}/>
		</div>
	)
}

class AboutPage extends React.Component{
	constructor(props){
		super(props);
		this.ref = React.createRef();
	}

	componentDidMount(){
		$(this.ref.current).on("animationend", () => {
			$(this.ref.current).css({'box-shadow': '0px 0px 50px 0px rgba(195,195,195,1)','background':'rgba(189,189,191,0.9)'});
		})
	}
	render(){
		return(
			<Wrapper>
				<Overlay />
				<Light ref={this.ref} />
				<Nav />
				<Pic />
				<P>Hello, i am a young web developer from Serbia, Jagodina.</P>
			</Wrapper>
		)
	}
}
export default AboutPage;