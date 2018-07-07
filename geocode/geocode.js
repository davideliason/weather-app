var request = require('request');

var geocodeAddress = (searchAddress, callback) => {

    var encodedAddress = encodeURIComponent(searchAddress);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("couldn't connect");
        } else if (body.status === 'ZERO_RESULTS') {
            callback("no such address");
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    });
}

module.exports.geocodeAddress = geocodeAddress
