import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlipcardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  color: white;
  background-color: white;
`;

const FlipcardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const FlipcardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: all 0.5s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const Flipcard = styled.div`
  background-color: white;
  width: 280px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  margin: 5px 2px;
  &:hover ${FlipcardInner} {
    transform: rotateY(180deg);
  }
`;

class FlipcardDiv extends React.PureComponent {
  render() {
    return (
      <Flipcard>
        <FlipcardInner>
          <FlipcardFront>{this.props.front}</FlipcardFront>
          <FlipcardBack>{this.props.back}</FlipcardBack>
        </FlipcardInner>
      </Flipcard>
    );
  }
}

FlipcardDiv.propTypes = {
  front: PropTypes.func,
  back: PropTypes.func,
};
export default FlipcardDiv;
