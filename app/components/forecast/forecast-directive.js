'use strict';

angular.module('myApp.forecast.forecast-directive', [])

.directive('forecast', ['forecastService', function(forecastService) {
    return {
        templateUrl: 'components/forecast/forecast.html',
        restrict: 'E',
        scope: {
            city: '@'
        },
        link: function(scope) {
            scope.iconUrl = 'http://openweathermap.org/img/w/';

            forecastService.getFeed(scope.city)
                .then(function(data) {
                    scope.city = data.city;
                    scope.feed = data.list;
                });
        }
    };
}]);