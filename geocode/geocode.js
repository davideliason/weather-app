var request = require('request');

var geocodeAddress = (searchAddress) => {

    var encodedAddress = encodeURIComponent(searchAddress);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log("couldn't connect");
        } else if (body.status === 'ZERO_RESULTS') {
            console.log("no such address");
        } else {
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
    });
}

module.exports.geocodeAddress = geocodeAddress
