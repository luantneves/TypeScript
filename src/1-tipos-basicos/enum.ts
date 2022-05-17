enum Permissoes{
    admin, //nível 0
    editor, //nível 1
    comum //nível 2
}

const usuario = {
    nivel: Permissoes.editor
};

console.log(usuario);