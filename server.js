var express = require('express'),
    app = express(),
    http = require('http');

app.use(express.static(__dirname + '/app'));

app.get('/feed', function(request, response) {
    var city = request.query.city;

    var options = {
        method: 'GET',
        hostname: 'api.openweathermap.org',
        path: '/data/2.5/forecast?q=' + city + '&units=metric&mode=json&APPID=7a0c4ab094f0fc455ac26f4999868257'
    };

    http.request(options, function(reqResponse) {
        var str = '';

        reqResponse.on('data', function(chunk) {
            str += chunk;
        });

        reqResponse.on('end', function() {
            response.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
            response.write(str);
            response.end();
        });

    }).end();
});

app.listen(process.env.PORT || 3000);
