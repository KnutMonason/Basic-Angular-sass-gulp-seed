'use strict';

var app = angular.module('myApp', [
  'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", { templateUrl: "application/view1/view1.html", controller: "ctrl" })
    .when("/view2", { templateUrl: "application/view2/view2.html", controller: "ctrl" })
    .when("/view1", { templateUrl: "application/view1/view1.html", controller: "ctrl" })
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "ctrl" });
}]);

app.controller('ctrl', function (/* $scope, $location, $http */) {
  $(document).ready(function ($) {

    var $navbar = $(".main-nav"),
      height = $navbar.height(),
      $pageContainer = $(".page-container")

    var y_pos = $navbar.offset().top;

    $(document).scroll(function () {
      var scrollTop = $(this).scrollTop();

      if (scrollTop > y_pos + height - 20) {
        $navbar.addClass("navbar-fixed").animate({
          top: 0
        });
        $pageContainer.addClass("move-down");
      } else if (scrollTop <= y_pos + 60) {
        $navbar.removeClass("navbar-fixed").clearQueue().animate({
          top: "-60px"
        });




        $pageContainer.removeClass("move-down");
      }
    });

  });
});

