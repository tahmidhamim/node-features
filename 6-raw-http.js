const { error } = require('console');
const http = require('http');

const url = `http://api.openweathermap.org/data/2.5/weather?lat=45&lon=-75&APPID=e71eb38d9fcabdd747e85ba680b2ca52&units=metric`;

const request = http.request(url, response => {
    let data = '';

    response.on('data', chunk => {
        data += chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', error => {
    console.log('An error', error);
});

request.end();