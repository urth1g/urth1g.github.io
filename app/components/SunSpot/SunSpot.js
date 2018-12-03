import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import keyframe from './keyframe.js';


const SunSpot = styled.div`
	position:absolute;
	left: ${props => props.leftPosition};
	top: ${props => props.topPosition};
	background:${props => props.color};
	border-radius:50%;
	width:1px;
	height:1px;
	box-shadow:0px 0px ${props => props.spread} ${props => props.radius} ${props => props.color};
	animation: ${keyframe} linear 7s infinite;
	animation-delay: 0.2s;
	opacity:0;
`;

SunSpot.propTypes = {
	leftPosition: PropTypes.string.isRequired,
	topPosition: PropTypes.string.isRequired,
	spread: PropTypes.string.isRequired,
	radius: PropTypes.string.isRequired,
	spread: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
}
export default SunSpot;