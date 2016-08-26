'use strict';

angular.module('myApp.forecast.forecast-directive', [])

.directive('forecast', ['forecastService', function(forecastService) {
    return {
        template: '<div>Here is the forecast</div>',
        restrict: 'E',
        link: function() {
            forecastService.getFeed('London,us');
        }
    };
}]);