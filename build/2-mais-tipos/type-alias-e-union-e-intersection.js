"use strict";
// Criando um objecto apartir do tipo pré-definido acima
//Todos os campos são obrigatórios, execto quando é utilizado "?" na frente
const gabriel = {
    name: 'Gabriel',
    lastname: 'Ramos',
    birthday: '29/01/1996',
    age: 25 // Esse campo fica opcional
};
function logMessage(message, level) {
    console.log(`[${level}] - ${message}`);
}
logMessage('Uma mensagem info', 'debug');
logMessage('Uma mensagem info', 'error');
logMessage('Uma mensagem info', 'debug');
const userWithProfile = {
    name: 'gabriel',
    lastname: 'ramos',
    birthday: '29/01/1996',
    bio: 'Olá meu nome é gabriel',
    interests: ['gatos', 'música', 'fotografia']
};
