declare var require;
console.log('Start!');
let http = require("http");
var request = require('request');


// var options = {
//     host: 'mobilenext.scislo.eu',
// };
//
// var callback = function(response) {
//     var str = '';
//
//     //another chunk of data has been recieved, so append it to `str`
//     response.on('data', function (chunk) {
//         str += chunk;
//     });
//
//     //the whole response has been recieved, so we just print it out here
//     response.on('end', function () {
//         console.log(str);
//     });
// }
//
// http.request(options, callback).end();

request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
    }
})