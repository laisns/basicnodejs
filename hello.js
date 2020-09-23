// Carrega o modulo HTTP do Node
var http = require("http");
var moment = require("moment");

function serverCallback(request, response) {
    var begin_time = moment('10:00', 'HH:mm');
    var end_time = moment('19:00', 'HH:mm');

    var message = 'Hello. Welcome to our page.'
    message += "It is now " + moment().format('HH:mm') + ' .'

    // Configura o cabeçalho da resposta com um status HTTP e um Tipo de Conteúdo
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Manda o corpo da resposta "Olá Mundo"
    response.end('Hello!\n' + 'It is ' + moment().format('LLLL')+ ' now.');
}
// Cria um servidor HTTP e uma escuta de requisições para a porta 8000
http.createServer(serverCallback).listen(8000, '127.0.0.1');

// Imprime no console a URL de acesso ao servidor
console.log('Servidor executando em http://127.0.0.1:8000/');