# 📚 Bookshelf — Gestor Multimídia Pessoal

Bem-vindo ao **Bookshelf**! Este é um monorepo modular e robusto construído para gerenciar suas coleções pessoais de filmes, livros e séries, com funcionalidades de compartilhamento público e privacidade.

O projeto utiliza uma arquitetura de **Monorepo** moderna com **PNPM** e **Turborepo** para garantir agilidade no desenvolvimento e facilidade no deploy.

---

## 🛠️ Tecnologias Principais

| Camada            | Tecnologia                                                                 |
| ----------------- | -------------------------------------------------------------------------- |
| **Monorepo**      | [Turborepo](https://turbo.build/) & [PNPM Workspaces](https://pnpm.io/)     |
| **Backend (API)** | [NestJS](https://nestjs.com/) (TypeScript)                                 |
| **Frontend (Web)**| [Next.js 15](https://nextjs.org/) (App Router + Tailwind CSS)               |
| **Banco de Dados**| [PostgreSQL](https://www.postgresql.org/)                                  |
| **ORM**           | [Prisma](https://www.prisma.io/)                                           |
| **Infrastructure**| [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/) |

---

## 🏗️ Arquitetura do Projeto

O código está organizado em pastas seguindo o padrão de monorepo:

- **`/apps/api`**: Servidor NestJS. Centraliza toda a lógica de negócio, autenticação e integração com APIs externas (ex: TMDB).
- **`/apps/web`**: Interface Next.js. Consome a API e oferece uma experiência fluida para o usuário.
- **`/packages/prisma`**: Pacote compartilhado que contém o esquema do banco de dados e as definições do Prisma Client.
- **`/backups`**: Pasta para armazenar backups locais/scripts de importação (ignora no Git).

---

## 🚀 Como Iniciar (Docker)

A maneira recomendada de rodar o projeto é através do **Docker Compose**, que sobe o banco de dados e as ferramentas de gerenciamento automaticamente.

### 1. Pré-requisitos
- [Docker](https://docs.docker.com/get-docker/) instalado.
- [PNPM](https://pnpm.io/installation) instalado (para rodar scripts de dev locais se desejar).

### 2. Configuração de Ambiente
Crie os arquivos `.env` baseados nos exemplos:

1.  Na raiz do projeto: `cp .env.example .env`
2.  Em `apps/api`: `cp apps/api/.env.example apps/api/.env`
3.  Preencha as chaves necessárias (especialmente `JWT_SECRET` e `TMDB_API_KEY`).

### 3. Rodando o Ambiente
Para subir o banco de dados e o Adminer (gerenciador de banco):
```bash
docker-compose up -d
```

### 4. Rodando as Aplicações (Locais)
Com o banco rodando via Docker, você pode iniciar o App Web e a API simultaneamente:
```bash
pnpm install
pnpm dev
```

- **Frontend (Web):** `http://localhost:3000`
- **Backend (API):** `http://localhost:3001`
- **Adminer (Database GUI):** `http://localhost:8080`

---

## 🎮 Manual de Funcionalidades

### 1. Gestão de Conteúdo
- **Filmes & Séries:** Integração direta com o TMDB para buscar pôsteres, diretores e anos de lançamento.
- **Livros:** Adicione e categorize suas leituras atuais e desejadas.
- **Categorias:** Organize cada tipo de mídia em categorias personalizadas.

### 2. Privacidade e Perfis Públicos
- **Página do Usuário (`/u/:username`):** Cada usuário possui uma página de perfil que pode ser compartilhada.
- **Controle de Visibilidade:** Na barra lateral (`Sidebar`), você pode alternar se sua lista é **Pública** ou **Privada**.
- **Segurança:** Informações sensíveis (como e-mail) são omitidas em consultas públicas (`/public/u/:username`).

### 3. Segurança
- Autenticação via **JWT (JSON Web Tokens)** com suporte a Refresh Tokens.
- **CORS parametrizado:** Pronto para ser configurado com o domínio da sua VPS.
- **Proteção DevSecOps:** Variáveis sensíveis e segredos centralizados em arquivos `.env`.

---

## 🐳 Infraestrutura & VPS

Este monorepo foi preparado para deploy em VPS via Docker:
- **`.dockerignore`**: Garante imagens leves e seguras.
- **`.gitignore`**: Protege segredos locais e arquivos de sistema.

---

© 2026 Bookshelf Project.
