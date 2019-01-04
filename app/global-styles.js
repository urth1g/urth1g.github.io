import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
  }

  a{
    color:white;
  }
  @keyframes shine{
    0%{
        box-shadow: 0px 0px 40px 10px #FEFF8B;
    }
    20%{
        box-shadow: 0px 0px 40px 35px #FEFF8B;
        background-color:#FA832A;
    }
    40%{
        box-shadow: 0px 0px 40px 35px #FEFF8B;
        background-color:#FA832A;
    }
    60%{
        box-shadow: 0px 0px 40px 35px #FEFF8B;
        background-color:#FECC3F;
    }
    80%{
        box-shadow: 0px 0px 40px 10px #FEFF8B;
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
    animation: shine 7s linear infinite;
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

  i{
    margin:0px 10px; 
    transition: .5s all;
  }
  i:hover{
    color:gray;
    transform:scale(1.1);
  }
  img.scale{
    transition:transform .5s;
  }
  img.scale:hover{
    transform:scale(1.1);
  }
  img:hover{
    color:gray;
  }

  .showDiv{
    position:fixed;
    left:0px;
    top:0px;
    width:100%;
    height:100vh;
    background-color:rgba(0,0,0,0.6);
    display:none;
    z-index:55;
    text-align:center;
  }

  ::-webkit-scrollbar { 
      display: none; 
  }
`;

export default GlobalStyle;
