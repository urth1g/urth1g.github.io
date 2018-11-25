import React from 'react';

import styled, { keyframes } from 'styled-components';
import List from './List';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

import Pic from '../../images/pic.jpg';
import NormalImg from 'components/Img';

const NAV = styled.nav`
  position:relative;
  height:auto;
  left:0;
  padding:5px;
  text-align:center;
`;

const A = styled(Link)`
	color:white;
	text-decoration:none;
	&:hover{
		text-decoration:none;
		color:lightblue;
	}
`;
const Shadow = keyframes`
    0%{
    		box-shadow:inset 80px -80px 50px -30px rgba(0,0,0,0.5);
    }
    33%{
    		box-shadow:inset 80px -80px 50px 0px rgba(0,0,0,0.5);
    }
    66%{
    		box-shadow:inset 80px -80px 50px -30px rgba(0,0,0,0.5);
    }
    100%{
    	box-shadow:inset 80px -80px 50px -30px rgba(0,0,0,0.5);
    }

`;

const Overlay = styled.div`
	box-shadow:inset 80px -80px 50px -30px rgba(0,0,0,0.5);
	width:100%;
	height:300px;
	position:absolute;
	display:block;
	border-radius:50%;
	animation: ${Shadow} 6s linear infinite;
	animation-delay:0.2s;
`;

function Img(){
	return(
		<div className="imgWrapper" style={{left:'50%','textAlign':'center',width:'300px',transform:'translateX(-50%)', position:'relative',display:'inline-block'}}>
			<Overlay />
			<img style={{border:'3px solid white'}} width="300" height="300" className="rounded-circle" alt="pic" src={Pic}/>
		</div>
	)
}
class Nav extends React.Component {
	render(){
		return(
			<NAV>
				<List>
					<ListItem><A to="/">Home</A></ListItem>
					<ListItem><A to="/about">About me</A></ListItem>
					<ListItem><A to="/resume">Resume</A></ListItem>
					<ListItem><A to="/projects">Projects</A></ListItem>
					<ListItem><A to="/contacts">Contact</A></ListItem>
				</List>
			</NAV>
		)
	}
}

export {
	Nav,
	Img
}