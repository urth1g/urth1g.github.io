(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{c6f963d22fd98b438cce:function(e,a,t){"use strict";t.r(a);t("8af190b70a6bc55c6f1b");var o,r=t("802cdb4f0b591dfd1229"),l=t.n(r),i=t("0b3cb19af78752326f59").c.div.withConfig({displayName:"Wrapper",componentId:"sc-1r9ptwq-0"})(["position:relative;height:100vh;width:100%;"]);function n(e,a,t,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,i=arguments.length-3;if(a||0===i||(a={children:void 0}),a&&l)for(var n in l)void 0===a[n]&&(a[n]=l[n]);else a||(a=l||{});if(1===i)a.children=r;else if(i>1){for(var m=new Array(i),s=0;s<i;s++)m[s]=arguments[s+3];a.children=m}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function m(e){e.preventDefault();var a=l()("#name").val(),t=l()("#email").val(),o=l()("#message").val();return console.log(a,t,o),l.a.ajax({type:"POST",url:"https://formspree.io/jevremovicdjordje97@gmail.com",data:{email:t,message:o,name:a},success:function(e){""!==t&&""!==o&&""!==a?alert("Email sent"):alert("There was an error! Check if all of the required fields are filled")}}),!1}var s=n("label",{htmlFor:"name"},void 0,"Name"),d=n("input",{required:!0,type:"name",className:"form-control",id:"name",name:"name","aria-describedby":"name",placeholder:"Enter your name"}),c=n("label",{htmlFor:"email"},void 0,"E-mail"),f=n("input",{required:!0,type:"email",className:"form-control",id:"email",name:"email",placeholder:"Enter your e-mail"}),p=n("label",{htmlFor:"message"},void 0,"Message");a.default=function(){return n(i,{},void 0,n("h2",{className:"responsive-header",style:{textAlign:"center",paddingTop:"25px",color:"#251612"}},void 0,"Contact me"),n("form",{method:"POST",onSubmit:m,style:{textAlign:"center"}},void 0,n("div",{className:"form-group",style:{width:"80%",textAlign:"left",margin:"8px auto"}},void 0,s,d),n("div",{className:"form-group",style:{width:"80%",textAlign:"left",margin:"8px auto"}},void 0,c,f),n("div",{className:"form-group",style:{width:"80%",textAlign:"left",margin:"8px auto"}},void 0,p,n("textarea",{style:{height:"350px"},className:"form-control",id:"message",name:"message",placeholder:"Enter your message"})),n("button",{style:{margin:"25px auto"},type:"submit",className:"btn btn-primary"},void 0,"Send")))}}}]);
