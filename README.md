# Documentação

- Esse repositório contém apenas algumas partes sobre o conteúdo do Livro aprendendo node, então deixarei aqui os devidos créditos a toda edição: "Learning Node, por Shelley Powers (O'Reilly). Copyright 2016 Shelley Powers, 978-1-4919-4312-0"

- Será interessante que você já possua um conhecimento prévio em javascript ou node para poder lidar com os termos mais técnicos e conseguir contextualizar toda a documentação, porém, sinta-se a vontade de qualquer forma, a documentação é livre.

### Sobre o código `hello.js`

- O código tem como finalidade básica criar um simples servidor web que escreve uma mensagem como resposta. Primeiro é necessário incluir o core módule HTTP, onde utilizaremos a função `http.createServer()` que recebe como parâmetro uma callback. É essa função anônima de callback ou função de retorno, que está passando a solicitação web para que o código devolva uma resposta.

- O javascript funciona em uma única thread, e o node emula um ambiente assíncrono em um ambiente com uma única thread por meio de um laço de eventos (event loop). Assim que uma solicitação web é recebida a callback é chamada.

- A mensagem no `console.log()` é mostrada no terminal quando a função de criação do servidor é chamada, o programa fica em execução travando o terminal até que uma solicitação web seja realizada.

- Uma vez que o servidor foi criado, escreve um cabeçalho de texto puro com um status 200 e a mensagem Hello World para encerrar a resposta.