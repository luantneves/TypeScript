let estaAtivo: boolean;

//..

estaAtivo = true;

function mapearStatusDeusuario(status: boolean){
    if(status){
        return `O usuário está ativo` //retornará uma string
    }else{
        return `O usuário NÃO está ativo` //retornará uma string
    }
}

mapearStatusDeusuario(true);