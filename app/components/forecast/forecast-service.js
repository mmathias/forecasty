'use strict';

angular.module('myApp.forecast.forecast-service', [])
    .service('forecastService', ['$http', function($http) {

        this.getFeed = function(city) {
            return $http.get('/feed', {params: { "city": city}})
                .then(function(response) {
                    return response.data;
                });
        }

}]);

