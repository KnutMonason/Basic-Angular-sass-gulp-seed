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
    console.log("Blog Controller reporting for duty.");
});