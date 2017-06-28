var express = require('express');
var route = express.Router();
var path = require('path');

route.get('/image/:icon_id', function (req, res) {

    var filePath = path.join(__dirname, '..', 'public', 'images');

    switch (req.params.icon_id){
        case '01d':
            filePath = filePath + '/' + 'clear_sky_day.png';
            break;
        case '01n':
            filePath = filePath + '/' + 'clear_sky_night.png';
            break;
        case '02d':
            filePath = filePath + '/' + 'few_clouds_day.png';
            break;
        case '02n':
            filePath = filePath + '/' + 'few_clouds_night.png';
            break;
        case '03d':
            filePath = filePath + '/' + 'scattered_clouds_day.png';
            break;
        case '03n':
            filePath = filePath + '/' + 'scattered_clouds_night.png';
            break;
        case '04d':
            filePath = filePath + '/' + ' broken_clouds_day.png';
            break;
        case '04n':
            filePath = filePath + '/' + ' broken_clouds_night.png';
            break;
        case '09d':
            filePath = filePath + '/' + 'shower_rain_day.png';
            break;
        case '09n':
            filePath = filePath + '/' + 'shower_rain_night.png';
            break;
        case '10d':
            filePath = filePath + '/' + 'rain_day.png';
            break;
        case '10n':
            filePath = filePath + '/' + 'rain_night.png';
            break;
        case '11d':
            filePath = filePath + '/' + 'thunderstorm_day.png';
            break;
        case '11n':
            filePath = filePath + '/' + 'thunderstorm_night.png';
            break;
        case '13d':
            filePath = filePath + '/' + 'snow_day.png';
            break;
        case '13n':
            filePath = filePath + '/' + 'snow_night.png';
            break;
        case '50d':
            filePath = filePath + '/' + 'mist_day.png';
            break;
        case '50n':
            filePath = filePath + '/' + 'mist_night.png';
            break;
    }

    res.sendFile(filePath);
});

module.exports = route;
