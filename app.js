// app.js

const readline = require('readline');
const {
    adicionarEstudante,
    removerEstudante,
    calcularMedia,
    filtrarEstudantesPorMedia,
    gerarRelatorioEstudantes,
    calcularTotalNotas,
    exibirEstudantes
} = require('./functions');

// Configurando readline para entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para exibir o menu
function exibirMenu() {
    console.log(`
    1. Adicionar Estudante
    2. Remover Estudante
    3. Exibir Todos os Estudantes
    4. Gerar Relatório de Estudantes
    5. Calcular Total de Notas
    6. Filtrar Estudantes por Média de Notas
    7. Sair
    `);

    rl.question('Escolha uma opção: ', opcao => {
        switch (opcao) {
            case '1':
                rl.question('Nome do estudante: ', nome => {
                    rl.question('Notas (separadas por vírgula): ', notasInput => {
                        const notas = notasInput.split(',').map(Number);
                        adicionarEstudante(nome, notas);
                        console.log(`Estudante ${nome} adicionado com sucesso!`);
                        exibirMenu();
                    });
                });
                break;
            case '2':
                rl.question('Nome do estudante a remover: ', nome => {
                    removerEstudante(nome);
                    console.log(`Estudante ${nome} removido com sucesso!`);
                    exibirMenu();
                });
                break;
            case '3':
                exibirEstudantes();
                exibirMenu();
                break;
            case '4':
                const relatorio = gerarRelatorioEstudantes();
                console.log('Relatório de Estudantes:');
                relatorio.forEach(estudante => {
                    console.log(`Nome: ${estudante.nome}, Média: ${estudante.media.toFixed(2)}`);
                });
                exibirMenu();
                break;
            case '5':
                const totalNotas = calcularTotalNotas();
                console.log(`Total de todas as notas: ${totalNotas}`);
                exibirMenu();
                break;
            case '6':
                rl.question('Média mínima: ', mediaMinima => {
                    const estudantesFiltrados = filtrarEstudantesPorMedia(parseFloat(mediaMinima));
                    console.log(`Estudantes com média maior ou igual a ${mediaMinima}:`);
                    estudantesFiltrados.forEach(estudante => {
                        console.log(`Nome: ${estudante.nome}, Média: ${calcularMedia(estudante.notas).toFixed(2)}`);
                    });
                    exibirMenu();
                });
                break;
            case '7':
                rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                exibirMenu();
                break;
        }
    });
}

// Iniciando o menu
exibirMenu();
