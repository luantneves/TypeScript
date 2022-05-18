"use strict";
let estaAtivo;
//..
estaAtivo = true;
function mapearStatusDeusuario(status) {
    if (status) {
        return `O usuário está ativo`; //retornará uma string
    }
    else {
        return `O usuário NÃO está ativo`; //retornará uma string
    }
}
mapearStatusDeusuario(true);
