'use strict';

angular.module('myApp.forecast.forecast-service', [])
    .service('forecastService', ['$http', '$interpolate', function($http, $interpolate) {

        var URL = 'http://api.openweathermap.org/data/2.5/forecast?q={{city}}&mode=json&APPID={{appKey}}';

        this.getFeed = function(city) {
            var urlFormatted = $interpolate(URL)({city: city, appKey: '7a0c4ab094f0fc455ac26f4999868257'});

            return $http.get(urlFormatted)
                .then(function(response) {
                    console.log(response);
                });
        }

}]);

