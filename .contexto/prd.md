# Requisitos Funcionais (RF)

- barra lateral para alternar entre as visões de "Filmes" e "Livros". 
- atributos de Filmes: Imagem (url para imagem na nuvem), Título, Ano, Diretor, Categoria, Data (que viu o filme) e Status (Assistido, Na Fila).
- atributos de Livros: Imagem (url para imagem na nuvem), Título, Ano, Autor, Categoria, Data Começo (data que começou a ler), Data Fim (data que terminou de ler), Status (Lido, Lendo, Na Fila).
- botão "+" para adicionar novos registros de forma manual
- botão para editar cada registro 
- por enquanto, não precisa de login

# Requisitos Não Funcionais (RNF)

## Fronted

- visualização do conteúdo em grid ou em row
- formato para desktop web

## Backend

- node.js 
- sqlite
- deploy apenas local
- apenas 1 usuário
- docker
- obter imagens de pacotes que não ocupem muito espaço
- fazer multi stage build


Ao reiniciar o projeto, sugiro:
1. Criar o repositório base e instalar o framework alvo.
2. Adicionar o arquivo `.env` e estruturar o ORM.
3. Subir e migrar o banco de dados inicial (Auth).
4. Desenvolver endpoints de entidades principais (Books/Movies).
5. Implementar proxy e deploy.

