const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/d146f99db8c92413f07f80c3d1552445/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
