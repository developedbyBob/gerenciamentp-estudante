let estudantes = [];

function adicionarEstudante(nome, notas) {
    estudantes.push({nome, notas});
}

function removerEstudante(nome) {
    const indice = estudantes.findIndex(estudantes => estudantes.nome === nome);
    if (indice != -1){
        estudantes.splice(indice, 1);
    }
}

function concatenarListasEstudantes(lista1, lista2){
    return lista1.concat(lista2)
}

function calcularMedia(notas) {
    const total = notas.reduce((acc, nota) => acc + nota, 0);
    return total / notas.length;
}

function filtrarEstudantesPorMedia(mediaMinima){
    return estudantes.filter(estudantes => calcularMedia(estudantes.notas) >= mediaMinima)
}

function gerarRelatorioEstudantes() {
    return estudantes.map(estudantes => {
        return {
            nome: estudantes.nome,
            media: calcularMedia(estudantes.notas)
        }
    })
}

function calcularTotalNotas() {
    return estudantes.reduce((acc, estuante) => acc + estuante.notas.reduce((soma, nota) => soma + nota, 0), 0)
}

function exibirEstudantes() {
    estudantes.forEach(estudante => {
        console.log(`Nome: ${estudante.nome}, Notas: ${estudante.notas.join(', ')}`);
    });
}

module.exports = {
    adicionarEstudante,
    removerEstudante,
    calcularMedia,
    filtrarEstudantesPorMedia,
    gerarRelatorioEstudantes,
    calcularTotalNotas,
    exibirEstudantes
};


/*
//===============================EXEMPLOS=========================================================

//ADICONANDO ESTUDANTES
adicionarEstudantes('Ana', [8, 6, 7])
adicionarEstudantes('Carlos', [10,10,10])
adicionarEstudantes('Maria', [7, 8, 8]);

console.log(estudantes)

//REMOVER UM ESTUDANTE
removerEstudante('Carlos')

console.log(estudantes)

//CONCATENANDO DUAS LISTA DE ESTUDANTES
let estudantesTurmaA = [{ nome: 'Lucas', notas: [8, 7, 9] }];
let estudantesTurmaB = [{ nome: 'Mariana', notas: [9, 8, 8] }];

let todosEstudantes = concatenarListasEstudantes(estudantesTurmaA, estudantesTurmaB)

console.log(todosEstudantes)

//CALCULANDO MEDIA
let mediaAna = calcularMedia(estudantes[0].notas);
let mediaCarlos = calcularMedia(estudantes[1].notas)

console.log('Aluna: ' + estudantes[0].nome + ', Media: ' + mediaAna)
console.log('Aluna: ' + estudantes[1].nome + ', Media: ' + mediaAna)

//FILTRANDO ALUNOS 
let estudantesFiltrados = filtrarEstudantesPorMedia(8)
console.log(estudantesFiltrados)

//GERANDO RELATORIOS ESTUDANTES
let relatoriosEstudantes = gerarRelatorioEstudantes();
console.log(relatoriosEstudantes);

//CALCULANDO TOTAL DE TODAS AS NOTAS
let totalNotas = calcularTotalNotas()
console.log(totalNotas)

// Exibindo os dados dos estudantes
exibirEstudantes();

*/