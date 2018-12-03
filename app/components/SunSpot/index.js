import React from 'react';
import styled from 'styled-components';

import SunSpot from './SunSpot.js';

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const minPositionBasedOnWidth = 300;
const maxPositionBasedOnWidth = window.innerWidth - 350;
const minPositionBasedOnHeight = 150;
const maxPositionBasedOnHeight = 400;


function GenerateSpots(){
	var oldValues = [];
	var array = [];
	for(var i = 0; i < 15; i++){
		var color = null;
		var rand = Math.floor(Math.random() * 3) + 1;
		switch (rand){
			case 1:
				//color='#d1341f';
				color='#ff5c38';
				break;
			case 2:
				color='#ff5c38';
				break;
			case 3:
				color='#ff5c38';
				break;
		}
		var spread = Math.floor(Math.random() * 25) + 5 + 'px';
		var radius = Math.floor(Math.random() * 20 ) + 20 + 'px';
		var randLeft = getRandomInteger(minPositionBasedOnWidth, maxPositionBasedOnWidth);
		var randTop = getRandomInteger(minPositionBasedOnHeight, maxPositionBasedOnHeight);

		array.push({leftPosition:randLeft,topPosition:randTop,radius:radius,spread:spread,color:color});

	}
	return array;
}

export default callback => {
	return GenerateSpots();
}