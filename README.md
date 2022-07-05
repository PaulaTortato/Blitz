# Blitz de Carreira

<!---Referência para o readme: https://github.com/iuricode/readme-template/blob/main/repository/repository.md--->

> Repositório para o Blitz de Carreira da Trybe.

## 💻 Set Up

Para começar, siga os seguintes passos:
* Baixe o repositório;
* Rode o ```npm install``` dentro das pastas frontend e backend.
* Rode o ```docker-compose up --build -d``` ou ```docker compose up --build -d``` na pasta raiz.
* Acesse a aplicação pelo localhost:3000.

## 🚀 O projeto

Esse projeto teve como finalidade atender uma demanda de lista de tarefas editavél de acordo com o funcionário logado.

Foram utilizados o Node.js, o Express, o JWT, o MySQL e o Sequelize para a criação da API, React para aplicação front-end e Jest, RTL, Supertest e Sinon para a testagem.

Outras ferramentas utilizadas: Cors, Eslint, axios, dotenv, e facilitadores do React (como react-dom e react-router-dom).

A aplicação inicia em uma tela inicial que com links redirecionavéis para a rota de login e para a de resgitro.

Na rota de login há inputs para validar o usuário, e caso a validação seja bem sucedida o usuário é redirecionado para a rota de tarefas.

Na tela de resgitro há inputs para a criação de um novo cadastro de funcionário, sendo as informações válidas o usuário é direcionado também para a rota de tarefas.

Na rota de tarefas é possível criar uma nova tarefa e atribuir a ela um status, também é possível editar uma tarefa ou deleta-la, assim como ordena-la por ordem alfabética, por data de criação ou por status.

## 📝 Incompleto

Alguns itens que não foram finalizados por razões de tempo:
* CSS;
* Testes;
* Ajuste da data;
