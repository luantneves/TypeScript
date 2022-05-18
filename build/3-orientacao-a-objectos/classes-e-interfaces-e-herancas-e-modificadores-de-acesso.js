"use strict";
// classes e interfaces e heranças e modificadores de acesso
// classes e funções
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Player extends Usuario {
    constructor(nome, idade, jogo) {
        super(nome, idade);
        this.jogo = jogo;
    }
    dizerOJogoAtual() {
        return `Meu nome é ${this.nome}, estou jogando no momento: ${this.jogo}`;
    }
    //Static
    static queHorasSao() {
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
class Jogo {
    constructor(nome) {
        this.nome = nome;
    }
    dizerNome() {
        return this.nome;
    }
}
const ghost = new Jogo("Ghost of Tsushima");
console.log(ghost.dizerNome());
//
class JogoComDescricao extends Jogo {
    constructor(nome, descricao) {
        super(nome);
        this.descricao = descricao;
    }
    dizerNomeComDescricao() {
        return `O nome do jogo é: ${this.nome}`; // Não acessa a propriedade mesmo herdando da classe Jogo, porque a classe jogo foi definida como PRIVATE, para ser acesível a classe jogo deveria estar como protected
    }
}
const ghost2 = new JogoComDescricao('Ghost of Tsushima', "É um jogo muito legal");
console.log(ghost2.dizerNome());
