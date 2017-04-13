'use strict';

var app = angular.module('myApp', [
  'ngRoute'
]);

app.controller('ctrl', function () {
  console.log("working");

  var allSections = [],
    sections = [],
    navElement = document.getElementsByTagName("nav"),
    mainElement = $('main'),
    headerElement = document.getElementsByTagName('header'),
    windowHeight = $(document).height();

  $(window).on('resize', function () {
    windowHeight = $(document).height();
  });


  var fixed = false;
  window.addEventListener('scroll', function () {

    var translate = 'translateY(' + Math.round(window.pageYOffset / 2) + 'px)';
    headerElement[0].style.transform = translate;
    headerElement[0].style.opacity = Math.max(0, windowHeight - window.pageYOffset) / windowHeight;


    if (window.pageYOffset >= windowHeight) {
      if (!fixed) {
        fixed = true;
        $('nav').addClass('fixed');
      }
    }
    else {
      if (fixed) {
        fixed = false;
        $('nav').removeClass('fixed');
      }
    }
  });
});

