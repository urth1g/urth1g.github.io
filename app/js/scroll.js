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

function isInViewScrollUp(offset, name, direction) {
  return (
    offset <= returnOffset(name) &&
    direction >= 0 &&
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

let page1 = true;
let page2 = false;
let page3 = false;
let page4 = false;
let page5 = false;

function handler(e) {
  e.preventDefault();

  const direction = e.wheelDelta;
  const offset = window.pageYOffset;

  if (
    page1 &&
    direction <= 0 &&
    (offset >= 0 && offset < returnOffset('.page-2'))
  ) {
    if (!$('.img1').hasClass('done')) {
      $('.img1').addClass('zoomIn animated done');
    }
    scrollToDiv(returnOffset('.page-2'));
    page1 = false;
    page2 = true;
  } else if (
    (page2 && direction >= 0) ||
    isInViewScrollUp(offset, '.page-2', direction)
  ) {
    scrollToDiv(returnOffset('.page-1'));
    page2 = false;
    page1 = true;
  } else if (
    (page2 && direction <= 0) ||
    isInViewScrollDown(offset, '.page-2', direction)
  ) {
    scrollToDiv(returnOffset('.page-3'));
    page2 = false;
    page3 = true;
  } else if (
    (page3 && direction >= 0) ||
    isInViewScrollUp(offset, '.page-3', direction)
  ) {
    if (!$('.img1').hasClass('done')) {
      $('.img1').addClass('zoomIn animated done');
    }
    scrollToDiv(returnOffset('.page-2'));
    page3 = false;
    page2 = true;
  } else if (
    (page3 && direction <= 0) ||
    isInViewScrollDown(offset, '.page-3', direction)
  ) {
    scrollToDiv(returnOffset('.page-4'));
    page3 = false;
    page4 = true;
  } else if (
    (page4 && direction >= 0) ||
    isInViewScrollUp(offset, '.page-4', direction)
  ) {
    scrollToDiv(returnOffset('.page-3'));
    page4 = false;
    page3 = true;
  } else if (
    (page4 && direction <= 0) ||
    isInViewScrollDown(offset, '.page-4', direction)
  ) {
    scrollToDiv(returnOffset('.page-5'));
    page4 = false;
    page5 = true;
  } else if (
    (page5 && direction >= 0) ||
    isInViewScrollUp(offset, '.page-5', direction)
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
