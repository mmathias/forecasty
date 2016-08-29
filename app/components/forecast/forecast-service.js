'use strict';

angular.module('myApp.forecast.forecast-service', [])
    .service('forecastService', ['$http', '$interpolate', 'CONFIG', function($http, $interpolate, CONFIG) {

        var PATH = '/data/2.5/forecast?q={{city}}&units=metric&mode=json&APPID={{appKey}}';

        this.getFeed = function(city) {
            var urlFormatted = CONFIG.forecast.url + $interpolate(PATH)({city: city, appKey: CONFIG.forecast.key});

            return $http.get(urlFormatted)
                .then(function(response) {
                    return response.data;
                });
        }

}]);

