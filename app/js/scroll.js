import $ from 'jquery';

function returnOffset(name) {
  return $(name).offset().top;
}

function returnHeight(name) {
  return $(name).outerHeight();
}

function scrollToDiv(height) {
  $('html,body')
    .stop()
    .animate(
      {
        scrollTop: height,
      },
      950,
    );
}

function isInViewScroll(offset, name) {
  return (
    offset <= returnOffset(name) &&
    offset + returnHeight(name) > returnOffset(name)
  );
}
function isInViewScrollDown(offset, name, direction) {
  return (
    (offset + returnHeight(name) >= returnOffset(name) &&
      direction <= 0 &&
      offset + returnHeight(name) < returnOffset(name) + returnHeight(name)) ||
    (offset === returnOffset(name) && direction <= 0)
  );
}

let page1 = false;
let page2 = false;
let page3 = false;
let page4 = false;
let page5 = false;
$(document).ready(function(){
  setTimeout(() => {
      const offset = window.pageYOffset;
      if(offset >= 0 && offset < returnOffset('.page-2')){
        page1 = true;
      }else if(offset >= returnOffset('.page-2') && offset < returnOffset('.page-3')){
        page2 = true;
      }else if(offset >= returnOffset('.page-3') && offset < returnOffset('.page-4')){
        page3 = true;
      }else if(offset >= returnOffset('.page-4') && offset < returnOffset('.page-5')){
        page4 = true;
      }else if(offset >= returnOffset('.page-5')){
        page5 = true;
      }
      console.log(page1,page2,page3,page4,page5);
  }, 500);
})


function handler(e) {
  e.preventDefault();

  const direction = e.wheelDelta;

  if (
    page1 &&
    direction <= 0 
  ) {
    if (!$('.img1').hasClass('done')) {
      $('.img1').addClass('zoomIn animated done');
    }
    scrollToDiv(returnOffset('.page-2'));
    page1 = false;
    page2 = true;
  } else if (
    (page2 && direction >= 0)
  ) {
    scrollToDiv(returnOffset('.page-1'));
    page2 = false;
    page1 = true;
  } else if (
    (page2 && direction <= 0) 
  ) {
    scrollToDiv(returnOffset('.page-3'));
    page2 = false;
    page3 = true;
  } else if (
    (page3 && direction >= 0)
  ) {
    if (!$('.img1').hasClass('done')) {
      $('.img1').addClass('zoomIn animated done');
    }
    scrollToDiv(returnOffset('.page-2'));
    page3 = false;
    page2 = true;
  } else if (
    (page3 && direction <= 0) 
  ) {
    if (!$('.pr1').hasClass('done')) {
      $('.pr1').addClass('fadeInLeft animated done');
      $('.pr2').addClass('fadeInRight animated done');
    }
    scrollToDiv(returnOffset('.page-4'));
    page3 = false;
    page4 = true;
  } else if (
    (page4 && direction >= 0)
  ) {
    scrollToDiv(returnOffset('.page-3'));
    page4 = false;
    page3 = true;
  } else if (
    (page4 && direction <= 0) 
  ) {
    if (!$('.pr1').hasClass('done')) {
      $('.pr1').addClass('fadeInLeft animated done');
      $('.pr2').addClass('fadeInRight animated done');
    }
    scrollToDiv(returnOffset('.page-5'));
    page4 = false;
    page5 = true;
  } else if (
    (page5 && direction >= 0)
  ) {
    scrollToDiv(returnOffset('.page-4'));
    page5 = false;
    page4 = true;
  }
}
function DOMMouseScrollHandler(e) {
  e.preventDefault();
}

window.addEventListener('scroll', DOMMouseScrollHandler, false);
window.addEventListener('mousewheel', handler, false);
