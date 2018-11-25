import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  @keyframes shine{
    0%{
        box-shadow: 0px 0px 40px 10px #FEFF8B;
    }
    33%{
        box-shadow: 0px 0px 40px 35px #FEFF8B;
        background-color:#FA832A;
    }
    66%{
        box-shadow: 0px 0px 40px 10px #FEFF8B;
        background-color:#FECC3F;
    }
    100%{
        box-shadow: 0px 0px 40px 10px #FEFF8B;
    }
  }
  #sun{
    top:17%;
    left:62.5%;
    background-color:#FEFF8B;
    width:30px;
    height:30px;
    opacity:1;
    border-radius:50%;
    animation: shine 6s linear infinite;
    box-shadow: 0px 0px 40px 10px #FEFF8B;
    position:absolute;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
