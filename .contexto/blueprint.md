# Bookshelf App - Product Requirements Document (PRD)

Este documento descreve os requisitos extraídos da versão inicial do Bookshelf App para guiar o recomeço do projeto do zero.

## 1. Visão Geral
O **Bookshelf App** é uma aplicação para rastreamento de consumo de entretenimento pessoal, permitindo que os usuários registrem os livros que leram (ou desejam ler) e os filmes que assistiram (ou desejam assistir), organizados por categorias.

## 2. Requisitos Funcionais (RFs)

### 2.1. Autenticação e Usuários
- **RF01:** O sistema deve permitir o cadastro de novos usuários (Nome, E-mail e Senha).
- **RF02:** O sistema deve permitir login baseado em e-mail e senha.
- **RF03:** O sistema deve proteger rotas privadas autenticando o usuário via Token JWT.
- **RF04:** O sistema pode armazenar a URL da foto de perfil do usuário.

### 2.2. Gestão de Livros (Books)
- **RF05:** O usuário logado deve poder adicionar um livro à sua lista, informando Título, Data de Lançamento, Autor, URL da Capa e Categoria.
- **RF06:** O sistema deve rastrear o status de leitura do livro (`NA_FILA`, `LENDO`, `LIDO`).
- **RF07:** O sistema deve registrar as datas de início (`started_reading_at`) e término de leitura (`finished_reading_at`).
- **RF08:** O usuário deve poder listar, editar e remover seus livros. (Apenas os seus, garantindo isolamento multitenant local).

### 2.3. Gestão de Filmes (Movies)
- **RF09:** O usuário logado deve poder adicionar um filme à sua lista, informando Título, Data de Lançamento, Diretor, URL do Poster e Categoria.
- **RF10:** O sistema deve rastrear o status do filme (`NA_FILA`, `ASSISTIDO`).
- **RF11:** O sistema deve registrar a data em que o filme foi assistido (`watched_at`).
- **RF12:** O usuário deve poder listar, editar e remover seus filmes.

### 2.4. Gestão de Categorias
- **RF13:** O sistema deve gerenciar categorias separadas por tipo (`MOVIE` ou `BOOK`).
- **RF14:** As categorias são únicas (restrição unívoca composta por nome e tipo).

## 3. Requisitos Não Funcionais (RNFs)

### 3.1. Arquitetura e Stack Tecnológica
- **Backend:** Node.js com framework NestJS (TypeScript). Padrão arquitetural em módulos, controllers e services.
- **Banco de Dados:** PostgreSQL (Relacional), modelado via Prisma ORM para gestão de schemas e migrações.
- **Infraestrutura:** Docker e Docker Compose, divididos em containers para o Banco de Dados, Aplicação Backend, proxy reverso usando NGINX, frontend, multi-stage build.
- **Segurança da Senha:** As senhas devem ser hasheadas usando `argon2` antes da persistência no banco.
- Monorrepo: PNPM

### 3.2. Segurança e Rotas
- **RNF01:** A API deve ser servida com o prefixo `/api` (ex: `/api/books`, `/api/movies`).
- **RNF02:** Rotas autenticadas devem utilizar um `JwtAuthGuard`, injetando o `userId` na requisição automaticamente a partir do token.
- **RNF03:** Isolamento de dados: Cada usuário só pode interagir com registros cujos `user_id` correspondam ao seu (Delete Constraint Cascate habilitado).
- **RNF04:** Não fazer hardcoding. Colocar todas as credenciais no .env.
- Sem rotas públicas.
- Implementar Helmet/CORS 