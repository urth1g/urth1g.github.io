(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{c6f963d22fd98b438cce:function(e,a,t){"use strict";t.r(a);t("8af190b70a6bc55c6f1b");var l,o=t("802cdb4f0b591dfd1229"),r=t.n(o),i=t("0b3cb19af78752326f59").c.div.withConfig({displayName:"Wrapper",componentId:"sc-1r9ptwq-0"})(["position:relative;height:100vh;width:100%;"]);function n(e,a,t,o){l||(l="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(a||0===i||(a={children:void 0}),a&&r)for(var n in r)void 0===a[n]&&(a[n]=r[n]);else a||(a=r||{});if(1===i)a.children=o;else if(i>1){for(var s=new Array(i),m=0;m<i;m++)s[m]=arguments[m+3];a.children=s}return{$$typeof:l,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function s(e){e.preventDefault();var a=r()("#name").val(),t=r()("#email").val(),l=r()("#message").val();return console.log(a,t,l),r.a.ajax({type:"POST",url:"https://api.boostyourelo.org/sendmail.php",data:{from:t,message:l,subject:a},success:function(e){console.log(e),""!==t&&""!==l&&""!==a?alert("Email sent"):alert("There was an error! Check if all of the required fields are filled")}}),!1}var m=n("input",{required:!0,type:"name",className:"form-control",id:"name",name:"name","aria-describedby":"name",placeholder:"Enter your name"}),d=n("input",{required:!0,type:"email",className:"form-control",id:"email",name:"email",placeholder:"Enter your e-mail"});a.default=function(){return n(i,{className:"responsive-height"},void 0,n("h2",{className:"responsive-header",style:{textAlign:"center",paddingTop:"25px",color:"white"}},void 0,"Contact me"),n("form",{method:"POST",onSubmit:s,style:{textAlign:"center"}},void 0,n("div",{className:"form-group",style:{width:"80%",textAlign:"left",margin:"8px auto"}},void 0,n("label",{style:{color:"white"},htmlFor:"name"},void 0,"Name"),m),n("div",{className:"form-group",style:{width:"80%",textAlign:"left",margin:"8px auto"}},void 0,n("label",{style:{color:"white"},htmlFor:"email"},void 0,"E-mail"),d),n("div",{className:"form-group",style:{width:"80%",textAlign:"left",margin:"8px auto"}},void 0,n("label",{style:{color:"white"},htmlFor:"message"},void 0,"Message"),n("textarea",{style:{height:"350px"},className:"form-control",id:"message",name:"message",placeholder:"Enter your message"})),n("button",{style:{margin:"25px auto",border:"1px solid white"},type:"submit",className:"btn btn-primary"},void 0,"Send")))}}}]);
