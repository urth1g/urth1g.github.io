import React from 'react';
import styled from 'styled-components'; // eslint-disable-line no-unused-vars
import $ from 'jquery'; // eslint-disable-line no-unused-vars
import Wrapper from './Wrapper';
import DownloadButton from './Button';
// Images
import Html from 'images/html.png';
import Js from 'images/js.png';
import Php from 'images/php.png';
import Node from 'images/node.png';
import Bootstrap from 'images/bootstrap.png';
import react from 'images/react.png';
import Laravel from 'images/laravel.png';
import Vue from 'images/Vue.png';
import Webpack from 'images/webpack.png';
import FlipcardDiv from './Flipcard';
import Star from 'images/star.svg';
import FullStar from 'images/star2.svg';


const StarContainer = styled.div`
	display: inline-block;
	position: absolute;
	width:50px;
	top:50%;
	transform:translateY(-50%);
	left:${props => props.left};
`;

const ImgContainer = styled.div`
  display: inline-block;
  position: relative;
  width:200px;
`;

const ImagesContainer = styled.div`
	width:900px;
	display:block;
	margin:0 auto;
	padding-left:5px;
	text-align:center;
`;

function ImgStyle(left,top){
	return{
		position:'relative',
		left: left,
		top: top
	}
}

const SkillsPage = () => (
  <Wrapper>
    <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Skills</h1>
    <ImagesContainer>
    <div className="row">
    	<div className="col-sm-4">
    		<FlipcardDiv front={
    			<img width="100%" src={Html} alt="html" />
    			} 
    			back={
    			<div style={{position:'relative', height:'198px', left:'-38px'}}>
	    			<StarContainer left="50px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="100px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="150px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="200px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>	    	
	    			<StarContainer left="250px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>		
	    		</div>
    			}
    			/>
    	</div>
    	<div className="col-sm-4">
    		<FlipcardDiv front={
    			<img style={ImgStyle('inherit', '15px')} width="100%" src={Js} alt="js" />
    			} 
    			back={
    			<div style={{position:'relative', height:'198px', left:'-38px'}}>
	    			<StarContainer left="50px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="100px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="150px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="200px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>	    	
	    			<StarContainer left="250px">
	    				<img width="100%" src={Star} alt="star" />
	    			</StarContainer>		
	    		</div>
    			}
    			/>
    	</div>
    	<div className="col-sm-4">
    		<FlipcardDiv front={
    			<img style={ImgStyle('inherit', '50px')} width="90%" src={Php} alt="php" />
    			} 
    			back={
    			<div style={{position:'relative', height:'198px', left:'-38px'}}>
	    			<StarContainer left="50px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="100px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="150px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="200px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>	    	
	    			<StarContainer left="250px">
	    				<img width="100%" src={Star} alt="star" />
	    			</StarContainer>		
	    		</div>
    			}
    			/>
    	</div>
    </div>
    <div className="row">
    	<div className="col-sm-4">
    		<FlipcardDiv front={
    				<img style={ImgStyle('inherit', '27px')} width="90%" src={Node} alt="node" />
    			} 
    			back={
	    			<div style={{position:'relative', height:'198px', left:'-38px'}}>
		    			<StarContainer left="50px">
		    				<img width="100%" src={FullStar} alt="star" />
		    			</StarContainer>
		    			<StarContainer left="100px">
		    				<img width="100%" src={FullStar} alt="star" />
		    			</StarContainer>
		    			<StarContainer left="150px">
		    				<img width="100%" src={FullStar} alt="star" />
		    			</StarContainer>
		    			<StarContainer left="200px">
		    				<img width="100%" src={FullStar} alt="star" />
		    			</StarContainer>	    	
		    			<StarContainer left="250px">
		    				<img width="100%" src={Star} alt="star" />
		    			</StarContainer>		
		    		</div>
    			}
    		/>
    	</div>
    	<div className="col-sm-4">
    		<FlipcardDiv front={
    			<img style={ImgStyle('inherit', '-5px')} width="80%" src={Bootstrap} alt="bootstrap" />
    			} 
    			back={
    			<div style={{position:'relative', height:'198px', left:'-38px'}}>
	    			<StarContainer left="50px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="100px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="150px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="200px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>	    	
	    			<StarContainer left="250px">
	    				<img width="100%" src={Star} alt="star" />
	    			</StarContainer>		
	    		</div>
    			}
    			/>
    	</div>
    	<div className="col-sm-4">
    		<FlipcardDiv front={
    			<img style={ImgStyle('inherit', '-5px')} width="76%" src={react} alt="react" />
    			} 
    			back={
    			<div style={{position:'relative', height:'198px', left:'-38px'}}>
	    			<StarContainer left="50px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="100px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="150px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="200px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>	    	
	    			<StarContainer left="250px">
	    				<img width="100%" src={Star} alt="star" />
	    			</StarContainer>		
	    		</div>
    			}
    			/>
    	</div>
    </div>
    <div className="row">
    	<div className="col-sm-4">
    		<FlipcardDiv front={
    			<img style={ImgStyle('inherit', '30px')} width="76%" src={Laravel} alt="laravel" />
    			} 
    			back={
    			<div style={{position:'relative', height:'198px', left:'-38px'}}>
	    			<StarContainer left="50px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="100px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="150px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="200px">
	    				<img width="100%" src={Star} alt="star" />
	    			</StarContainer>	    	
	    			<StarContainer left="250px">
	    				<img width="100%" src={Star} alt="star" />
	    			</StarContainer>		
	    		</div>
    			}
    			/>
    	</div>
    	<div className="col-sm-4">
    		<FlipcardDiv front={
    			<img style={ImgStyle('inherit', '15px')} width="65%" src={Vue} alt="vue" />
    			} 
    			back={
    			<div style={{position:'relative', height:'198px', left:'-38px'}}>
	    			<StarContainer left="50px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="100px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="150px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="200px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>	    	
	    			<StarContainer left="250px">
	    				<img width="100%" src={Star} alt="star" />
	    			</StarContainer>		
	    		</div>
    			}
    			/>
    	</div>
    	<div className="col-sm-4">
    		<FlipcardDiv front={
    			<img style={ImgStyle('inherit', '0px')} width="72%" src={Webpack} alt="webpack" />
    			} 
    			back={
    			<div style={{position:'relative', height:'198px', left:'-38px'}}>
	    			<StarContainer left="50px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="100px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="150px">
	    				<img width="100%" src={FullStar} alt="star" />
	    			</StarContainer>
	    			<StarContainer left="200px">
	    				<img width="100%" src={Star} alt="star" />
	    			</StarContainer>	    	
	    			<StarContainer left="250px">
	    				<img width="100%" src={Star} alt="star" />
	    			</StarContainer>		
	    		</div>
    			}
    			/>
    	</div>
    </div>
    </ImagesContainer>
	    <div style={{textAlign:'center', position:'relative',top:'-20px',color:'green'}}>
	    	<DownloadButton/>
	    </div>
  </Wrapper>
);
export default SkillsPage;
