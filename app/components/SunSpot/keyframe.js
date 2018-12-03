import styled, { keyframes } from 'styled-components';

const keyframe = keyframes`
	0%{
		opacity:0;
	}

	20%{
		opacity:0.6;
	}
	40%{
		opacity:0.55;
	}
	60%{
		opacity:0.55;
	}
	80%{
		opacity:0;
	}
	100%{
		opacity:0;
	}
`;

export default keyframe;