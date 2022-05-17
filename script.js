let cpf = "41738481883";
let numeros = cpf.substring(0,10)

let soma = 0;

for(let i = 10; i > 1; i--){
    soma += numeros.charAt(10 - i) * i
    
}

console.log(soma)

