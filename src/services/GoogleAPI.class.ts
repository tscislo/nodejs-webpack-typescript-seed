let request = require('request');

export default class googleAPI {
    constructor() {
        request('http://www.google.com', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // Show the HTML for the Google homepage.
            }
        })
    }
}

