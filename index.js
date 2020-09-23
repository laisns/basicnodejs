var http = require('http');
var request = require('request');
var request_body = undefined;

function createHtmlString(retrievedData){
    var html_string = '<html>\n<header>\n<title>Data aggreagator</title>\n</header>\n<body>\n<table>';
    html_string += '<tr>\n';
    for (var attribute in retrievedData[0]){
        if (typeof  retrievedData[0][attribute] !== 'object') {
            html_string += '<td>' + attribute + '</td>\n';
        }
    }
    html_string += '</tr>\n';
    retrievedData.forEach(function (object) {
        html_string += '<tr>\n';
        for (var attribute in object) {
            if (typeof object[attribute] !== 'object') {
                html_string += '<td>' + object[attribute] + '</td>\n';
            }
        }
        html_string += '</tr>\n';
    });
    html_string += '</table>\n'
}

request('http://www.trumba.com/calendars/brisbane-city-council.json', function(err, request_res, body) {
    request_body = body;
});

http.createServer(function (req, res) {
    if (request_body) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(request_body);
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Nothing retrieved yet.');
    }
}).listen(8000, '127.0.0.1');

// Imprime no console a URL de acesso ao servidor
console.log('Servidor executando em http://127.0.0.1:8000/');