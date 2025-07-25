# 📦 API de Cadastro de Pessoas

Projeto prático desenvolvido com **Node.js**, **Express** e **MongoDB**.  
Essa API permite **cadastrar, listar, editar e deletar pessoas**, com integração ao banco de dados em nuvem (MongoDB Atlas).

---

## 🚀 Tecnologias usadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Postman (testes de requisição)

---

## Instale as dependências:
npm install express mongoose
npm install --save-dev nodemon

## 📮 Endpoints da API
Método	Rota	Descrição

POST	/person	Cria uma nova pessoa

GET	/person	Retorna todas as pessoas

GET	/person/:id	Retorna uma pessoa por ID

PATCH	/person/:id	Atualiza dados de uma pessoa

DELETE	/person/:id	Remove uma pessoa do sistema

