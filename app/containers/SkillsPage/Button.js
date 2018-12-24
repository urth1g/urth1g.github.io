import React from 'react';
import styled from 'styled-components';
import DownloadPic from 'images/pic.svg';
import DownloadPicHover from 'images/pic1.svg';

const Button = styled.button`
  margin-top: 50px;
  width: 250px;
  height: 50px;
  border: 5px solid green;
  background-image: url(${DownloadPic});
  background-position: 3% 50%;
  background-repeat: no-repeat;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1);
    background-color: green;
    color: white;
    background-image: url(${DownloadPicHover});
    cursor: pointer;
  }
`;

function onClick() {
  const a = document.createElement('a');

  a.href = 'download';
  a.click();
}

const DownloadButton = () => <Button onClick={onClick}>Download my CV</Button>;

export default DownloadButton;
