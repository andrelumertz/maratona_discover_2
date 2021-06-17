const express = require("express")  // esta chamando o pacote express
const server = express()  // express é um tipo de função e ele esta sendo executado
const routes = require("./routes");

server.set('view engine', 'ejs')


// habilitar arquivos estaticos
server.use(express.static("public")) // criando rotas automaticas, o use() é uma função que tbm serve para adicionar rotas ao servidor.


// routes arquivos
server.use(routes)


server.listen(3000, () => console.log('rodando'))  // o server esta ouvindo a porta 3000 e executando uma funçao anonima que retorna o console.log

