# Documentação

- Esse repositório contém apenas algumas partes sobre o conteúdo do Livro aprendendo node, então deixarei aqui os devidos créditos a toda edição: "Learning Node, por Shelley Powers (O'Reilly). Copyright 2016 Shelley Powers, 978-1-4919-4312-0"

- Será interessante que você já possua um conhecimento prévio em javascript ou node para poder lidar com os termos mais técnicos e conseguir contextualizar toda a documentação, porém, sinta-se a vontade de qualquer forma, a documentação é livre.

### Sobre o código `hello.js`

- O código tem como finalidade básica criar um simples servidor web que escreve uma mensagem como resposta. Primeiro é necessário incluir o core módule HTTP, onde utilizaremos a função `http.createServer()` que recebe como parâmetro uma callback. É essa função anônima de callback ou função de retorno, que está passando a solicitação web para que o código devolva uma resposta.

- O javascript funciona em uma única thread, e o node emula um ambiente assíncrono em um ambiente com uma única thread por meio de um laço de eventos (event loop). Assim que uma solicitação web é recebida a callback é chamada.

- A mensagem no `console.log()` é mostrada no terminal quando a função de criação do servidor é chamada, o programa fica em execução travando o terminal até que uma solicitação web seja realizada.

- Uma vez que o servidor foi criado, escreve um cabeçalho de texto puro com um status 200 e a mensagem Hello World para encerrar a resposta.

### Sobre o código `tuned-hello.js`

- Com base no código anterior e adicionando mais uma estrutura nova, a primeira diferença aqui é que estamos chamando o módulo (core module) FS ou File System do node. E ainda existe um terceiro módulo chamado aqui `var name = require('url').parse(req.url, true).query.name;`. Fazendo assim um encadeamento das propriedades do módulo. Isso acontece muito no caso do módulo URL que é bastante utilizado para manipular URLs.

- os nomes dos parâmetros de solicitação e resposta são abreviados para req e res com a finalidade apenas de facilitar na escrita do código. Depois de analisar a solicitação extrair o valor de `name`, a primeira coisa é determinar se o valor é undefined, se for, o valor é ajustado para o padrão world. Se existir um valor definido para `name`, é testado novamente para saber se é alien, nesse caso seria retornado a imagem do nosso pequeno alien. Caso contrário, ele retornará a mensagem do exemplo anterior mudando apenas a palavra world para a query string que for passada.

- No entanto, o nome sendo alien, o que acontece é que o método `fs.stat()` verifica se o arquivo existe e devolve um objeto com informações sobre o arquivo, incluindo o tamanho. Esse valor é usado para criar um cabeçalho.

- Se o arquivo de imagem não existir, a aplicação emite uma mensagem de error informando que o alien não está por perto utilizando `console.error()`.

- Se a imagem existir ela é atribuida a uma variável que por sua vez será devolvida na resposta. `var file = __dirname + '/../files/alien.jpeg';` utilizei essa linha de código para poder fazer com que o script localize onde está o arquivo.

- o método `fs.stat()` usa a estrutura-padrão de código para callbacks do node com o valor do erro no primeiro argumento que é chamado de errback.

- A maior lição que temos nesse segundo exemplo é que nem todo I/O do node precisa ser assíncrono.