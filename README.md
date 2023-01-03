# 📊 Project Manager API

![GitHub repo size](https://img.shields.io/github/repo-size/LucasAndrade912/project-manager-api?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/LucasAndrade912/project-manager-api?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/LucasAndrade912/project-manager-api?style=for-the-badge)

> API do [Project Manager](https://github.com/LucasAndrade912/project-manager) utilizada para servir os dados e armazenar os dados dos projetos.

## 🛠️ Techs

<div>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
</div>

## 🛸 Instalação e Execução do projeto

Para clonar este repositório utilize o comando:

```bash
git clone https://github.com/LucasAndrade912/project-manager-api.git
```

Em seguida instale todas as dependências do projeto:

```bash
npm install

# or

yarn install
```

É necessário ter o Postgres instalado em sua máquina, ou você pode utilizar uma imagem docker para roda-lo:

```bash
docker run -d --name nome-do-container -p 5432:5432 -e POSTGRES_PASSWORD=root postgres
```

Após as instalações e execução do Postgres, rode `npm start` ou `yarn start` para executar o projeto.
