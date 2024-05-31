Sistema de Gerenciamento de Estudantes
======================================

Um simples sistema de gerenciamento de estudantes desenvolvido em Node.js, que permite adicionar, remover, exibir estudantes, gerar relatórios e calcular totais de notas.

Como Usar
---------

### Pré-requisitos

-   Node.js instalado na sua máquina

### Instalação

1.  Clone o repositório para a sua máquina local:


    `git clone https://github.com/seu-usuario/sistema-gerenciamento-estudantes.git`

2.  Navegue até o diretório do projeto:

    `cd sistema-gerenciamento-estudantes`

3.  Instale as dependências:

    `npm install`

### Execução

Para iniciar o sistema, execute o seguinte comando no terminal:

`node app.js`

Siga as instruções no console para interagir com o sistema.

Funcionalidades
---------------

-   Adicionar novos estudantes com seus respectivos nomes e notas.
-   Remover estudantes existentes pelo nome.
-   Exibir informações detalhadas de todos os estudantes.
-   Gerar um relatório de desempenho de todos os estudantes, mostrando seus nomes e médias de notas.
-   Calcular o total de todas as notas dos estudantes.
-   Filtrar estudantes por média mínima de notas.

Contribuindo
------------

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou uma issue para discutir novas funcionalidades, correções de bugs ou melhorias no código.

Licença
-------

Este projeto está licenciado sob a Licença MIT.

### Explicação Detalhada do Código

1.  **Adicionar Estudantes e Notas**:

    -   A função `adicionarEstudante` adiciona um novo estudante ao array `estudantes`.
2.  **Remover Estudantes**:

    -   A função `removerEstudante` encontra o índice do estudante pelo nome e o remove usando `splice`.
3.  **Concatenar Listas de Estudantes**:

    -   A função `concatenarListasEstudantes` combina duas listas de estudantes em uma só.
4.  **Calcular Média de Notas**:

    -   A função `calcularMedia` calcula a média das notas de um estudante.
5.  **Filtrar Estudantes por Média**:

    -   A função `filtrarEstudantesPorMedia` retorna uma lista de estudantes cuja média de notas é maior ou igual à média mínima especificada.
6.  **Gerar Relatórios de Estudantes**:

    -   A função `gerarRelatorioEstudantes` cria um relatório com o nome e a média de notas de cada estudante.
7.  **Calcular Total de Notas**:

    -   A função `calcularTotalNotas` soma todas as notas de todos os estudantes.
8.  **Exibir Dados dos Estudantes**:

    -   A função `exibirEstudantes` usa `forEach` para iterar sobre todos os estudantes e exibir seus dados no console.


### Função `removerEstudante`

`function removerEstudante(nome) {
    const indice = estudantes.findIndex(estudante => estudante.nome === nome);
    if (indice !== -1) {
        estudantes.splice(indice, 1);
    }
}`

#### Passo a Passo da Função:

1.  **Definição da Função**:

    -   A função `removerEstudante` aceita um parâmetro `nome`, que é o nome do estudante que você deseja remover do array `estudantes`.
2.  **Encontrar o Índice do Estudante**:

    `const indice = estudantes.findIndex(estudante => estudante.nome === nome);`

    -   Aqui, estamos usando o método `findIndex` do array `estudantes`.
    -   O método `findIndex` percorre o array `estudantes` e executa uma função de teste (neste caso, uma função de seta) em cada elemento do array.
    -   A função de teste compara o nome do estudante atual (`estudante.nome`) com o nome fornecido (`nome`).
    -   Se encontrar um estudante cujo nome corresponde ao nome fornecido, o método `findIndex` retorna o índice desse estudante.
    -   Se não encontrar nenhum estudante com o nome fornecido, `findIndex` retorna `-1`.
3.  **Verificar se o Estudante foi Encontrado**:

    `if (indice !== -1) {`

    -   Verificamos se `indice` não é igual a `-1`.
    -   `indice !== -1` significa que um estudante com o nome fornecido foi encontrado no array.
    -   Se `indice` for igual a `-1`, significa que nenhum estudante com esse nome foi encontrado.
4.  **Remover o Estudante do Array**:

     `estudantes.splice(indice, 1);`

    -   Se um estudante foi encontrado (`indice !== -1`), usamos o método `splice` para remover o estudante do array.
    -   `splice` é um método que altera o conteúdo de um array, removendo elementos existentes e/ou adicionando novos elementos.
    -   `estudantes.splice(indice, 1)` remove um elemento do array `estudantes` a partir da posição `indice`.
    -   O segundo parâmetro `1` indica que apenas um elemento deve ser removido.

### Exemplo Prático

Vamos ver um exemplo prático de como esta função funciona:

#### Array Inicial:

`let estudantes = [
    { nome: 'Ana', notas: [85, 92, 78] },
    { nome: 'Carlos', notas: [90, 88, 94] },
    { nome: 'Maria', notas: [70, 80, 85] }
];`

#### Removendo 'Carlos':

`removerEstudante('Carlos');`

#### Passos da Execução:

1.  A função é chamada com o argumento `nome = 'Carlos'`.
2.  `findIndex` percorre o array `estudantes` e encontra 'Carlos' no índice `1`.
3.  Como `indice` não é `-1`, `splice` é chamado para remover o elemento no índice `1`.
4.  O array `estudantes` agora é:

    `[
        { nome: 'Ana', notas: [85, 92, 78] },
        { nome: 'Maria', notas: [70, 80, 85] }
    ]`

### Resumo

A função `removerEstudante` encontra e remove um estudante do array `estudantes` com base no nome fornecido, utilizando o método `findIndex` para localizar o índice e `splice` para remover o elemento.

### Método `forEach`

#### Descrição

O método `forEach` é usado para executar uma função fornecida uma vez para cada elemento do array. Ele é normalmente usado para iterar sobre arrays quando você deseja realizar uma operação em cada elemento do array.

#### Características

-   **Não retorna um novo array**: O método `forEach` não retorna um novo array. Ele simplesmente executa a função fornecida em cada elemento do array original.
-   **Não altera o array original**: A menos que a função fornecida modifique os elementos do array, o array original permanece inalterado.
-   **Callback Function**: A função fornecida como argumento recebe três parâmetros: o elemento atual, o índice do elemento atual, e o array original.

#### Sintaxe

`array.forEach(function(element, index, array) {
  // operação a ser realizada em cada elemento
});`

#### Exemplo

`let numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero, indice) => {
  console.log(`Índice: ${indice}, Valor: ${numero}`);
});

// Saída:
// Índice: 0, Valor: 1
// Índice: 1, Valor: 2
// Índice: 2, Valor: 3
// Índice: 3, Valor: 4
// Índice: 4, Valor: 5`

### Método `map`

#### Descrição

O método `map` cria um novo array com os resultados da chamada de uma função fornecida em cada elemento do array original. É normalmente usado quando você deseja transformar ou mapear cada elemento de um array para um novo valor.

#### Características

-   **Retorna um novo array**: O método `map` retorna um novo array contendo os resultados da função fornecida aplicada a cada elemento do array original.
-   **Não altera o array original**: O array original não é modificado.
-   **Callback Function**: A função fornecida como argumento recebe três parâmetros: o elemento atual, o índice do elemento atual, e o array original.

#### Sintaxe

`let novoArray = array.map(function(element, index, array) {
  // transformação a ser realizada em cada elemento
  return novoElemento;
});`

#### Exemplo

`let numeros = [1, 2, 3, 4, 5];

let numerosDobro = numeros.map(numero => numero * 2);

console.log(numerosDobro);
// Saída: [2, 4, 6, 8, 10]`

### Comparação `forEach` vs `map`

#### Semelhanças

-   Ambos iteram sobre cada elemento de um array.
-   Ambos aceitam uma função callback que pode receber até três parâmetros: elemento atual, índice do elemento, e o array original.

#### Diferenças

-   **Resultado**:
    -   `forEach`: Não retorna um novo array, simplesmente executa a função para cada elemento.
    -   `map`: Retorna um novo array com os resultados da função aplicada a cada elemento.
-   **Uso**:
    -   `forEach`: Usado quando você deseja realizar uma operação em cada elemento do array, sem a necessidade de criar um novo array.
    -   `map`: Usado quando você deseja transformar cada elemento de um array em um novo valor e criar um novo array com esses valores transformados.

### Exemplos Práticos

#### Exemplo com `forEach`

`let frutas = ['maçã', 'banana', 'laranja'];

frutas.forEach((fruta, indice) => {
  console.log(`${indice + 1}: ${fruta}`);
});

// Saída:
// 1: maçã
// 2: banana
// 3: laranja`

#### Exemplo com `map`

`let frutas = ['maçã', 'banana', 'laranja'];

let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());

console.log(frutasMaiusculas);
// Saída: ['MAÇÃ', 'BANANA', 'LARANJA']`

### Conclusão

-   Use `forEach` quando você precisa realizar uma ação para cada elemento do array e não precisa de um novo array.
-   Use `map` quando você precisa transformar cada elemento do array e deseja obter um novo array com esses elementos transformados.