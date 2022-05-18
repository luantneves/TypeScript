// classes e interfaces e heranças e modificadores de acesso

// classes e funções

class Usuario{
    public nome;
    public idade;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}

class Player extends Usuario{
    public jogo;

    constructor(nome: string, idade:number, jogo:string){
        super(nome, idade);

        this.jogo = jogo;
    }

    dizerOJogoAtual(){
        return `Meu nome é ${this.nome}, estou jogando no momento: ${this.jogo}`;
    }
    //Static
    static queHorasSao(){
        return Date(); //metódo para ser usado diretamente da classe
    }
}

const jogador = new Player('Luan', 29, 'Fifa 22');

console.log(jogador.dizerOJogoAtual());
console.log(Player.queHorasSao()); // executa diretamente da classe (static)

//private, protected, public

//public: acessível de forma geral, dentro e fora da classe
//private: é acessível apenas dentro da classe onde o campo foi criado
//protected: acessível apenas dentro da classe (e subclasses) onde o campo foi criado

class Jogo{
    //private nome;  // Acesível apenas dentro da classe, para acessar ou alterar fora necessita de um método expecífico
    protected nome; 
    constructor(nome:string){
        this.nome = nome;
    }

    dizerNome(){ //Com esse método é possível acessar o nome
        return this.nome;
    }
}

const ghost = new Jogo("Ghost of Tsushima");

console.log(ghost.dizerNome());

//

class JogoComDescricao extends Jogo{
    private descricao;
    constructor(nome: string, descricao: string){
        super(nome);

        this.descricao = descricao;
    }

    dizerNomeComDescricao(){
        return `O nome do jogo é: ${this.nome}`; // Não acessa a propriedade mesmo herdando da classe Jogo, porque a classe jogo foi definida como PRIVATE, para ser acesível a classe jogo deveria estar como protected
    }

}

const ghost2 = new JogoComDescricao('Ghost of Tsushima', "É um jogo muito legal");
console.log(ghost2.dizerNome());

//INTERFACES

interface IJogoComDescricao{
    //nome: string;
    descricao: string;
    dizerNomeComDescricao(): string;
}

//IMPLEMENTS
class JogoComDescricao2 extends Jogo implements IJogoComDescricao{
    public descricao;

    constructor(nome:string, descricao: string){
        super(nome);

        this.descricao = descricao;

    }

    dizerNomeComDescricao(){
        return `O nome do jogo é: ${this.nome}`;
    }

}



