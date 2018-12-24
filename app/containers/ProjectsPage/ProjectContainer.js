import styled from 'styled-components'; // eslint-disable-line no-unused-vars

const PR = styled.div`
  width: 100%;
  height: 330px;
  margin-top: 30px;
  background: url(${props => props.img});
  background-size: cover;
  z-index: 5;
  border: 1px solid white;
`;

export default PR;
