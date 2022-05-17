let gatos: string[];

gatos = ["toninho", "ratão"]; //atribuindo depois

// OU

const gatos2: string[] = ["toninho", "ratão"]; //atribuindo na declaração

// gatos.push(5); Não é possível adicionar número no array definido como string


function exibeGatos(gatos: string[]){
    return `Os gatos são: ${gatos.join(',')}`
}


console.log(exibeGatos(gatos));


