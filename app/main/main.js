'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainController'
    });
}])

.controller('MainController', [function() {

}]);
