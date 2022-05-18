//TYPE ALIAS
//Objecto com os tipos de valores definidos
type User = {
    name: string;
    lastname: string;
    birthday: String;
    age?: number; // Para deixar a propriedade opicional utiliza-se "?"
}


// Criando um objecto apartir do tipo pré-definido acima
//Todos os campos são obrigatórios, execto quando é utilizado "?" na frente
const gabriel: User = {
    name: 'Gabriel',
    lastname: 'Ramos',
    birthday: '29/01/1996',
    age: 25 // Esse campo fica opcional
}

// Union Types - Como se fosse o ||

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel){
    console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem info', 'debug')
logMessage('Uma mensagem info', 'error')
logMessage('Uma mensagem info', 'debug')

// INTERSECTION TYPES - Como se fosse &

type About = {
    bio:string;
    interests: string[]
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'gabriel',
    lastname: 'ramos',
    birthday: '29/01/1996',
    bio: 'Olá meu nome é gabriel',
    interests: ['gatos', 'música', 'fotografia']
}



