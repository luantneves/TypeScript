function principal(): void{ // Não tem retorno

    console.log('executando')
    
}

principal();

//Laços de repetições infinitos ou funções que disparam erros
function funcaoQueNuncaRetorna(): never{

    while(true){

    }

}

funcaoQueNuncaRetorna();
