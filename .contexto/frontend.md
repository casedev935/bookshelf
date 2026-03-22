# Tecnologia

Um Frontend SPA (React/Next.js ou Vue) pode ser construído com:

# Funcionalidades do Frontend

O aplicativo é um Media Manager para organizar filmes e livros.

Gerenciamento de Conteúdo: Listagem, adição, edição e exclusão (CRUD) de Filmes, Livros e Categorias.
Visualização Flexível: Suporta alternância dinâmica entre visualização em Grade (Cards) e Linha (Lista).
Sistema de Filtros: Filtragem em tempo real por título, autor/diretor, status (ex: Assistido, Lido, Na Fila) e categoria.
Gestão de Categorias: Criação de categorias específicas para cada tipo de mídia.
Autenticação Completa: Telas de Login e Registro com validações de e-mail e requisitos de segurança de senha (mínimo 8 caracteres, números e símbolos).
Persistência de Preferências: Salva o estado da sidebar e a escolha de layout no localStorage.

# Comportamento da Janela e Painéis

A interface utiliza um layout moderno e responsivo:

Sidebar (Barra Lateral): Retrátil (toggle). Quando aberta, mostra ícones e nomes; quando recolhida, exibe apenas ícones para maximizar o espaço do conteúdo.
Header Dinâmico: O título e os controles de visualização (Grid/Row/Adicionar) adaptam-se conforme a seção selecionada.
Área de Filtros: Uma barra horizontal fixa acima do conteúdo para busca rápida.
Sistema de Modais: Utiliza camadas de sobreposição (modal-overlay) para formulários e confirmações de exclusão, mantendo o usuário no contexto da página principal.

# Estilo Visual (Cores, Fontes e Formato)

O design segue uma estética Neo-brutalista, que combina elementos técnicos com uma interface limpa e de alto contraste.

Paleta de Cores:
Fundo: #f7f9fc (Cinza azulado muito claro) com um padrão de grade técnica (grid lines).
Texto Principal: #1e293b (Azul escuro profundo).
Acento (Brand): #137fec (Azul vibrante) usado em botões, itens ativos e destaques.
Status: Verde (#22c55e) para concluídos, Azul (#3b82f6) para em andamento e Laranja (#f97316) para fila.
Tipografia:
Inter: Fonte Sans-serif usada para o corpo do texto e leitura principal, focada em clareza.
JetBrains Mono: Fonte Monospace usada para o logo, botões, labels e elementos de navegação, reforçando o estilo "brutalista/tech".
Formato e Geometria:
Bordas: Marcantes e sólidas (2px solid #1e293b).
Sombras: Estilo "Hard Shadow" (6px 6px 0px 0px), sem desfoque, criando um efeito de profundidade 2D.
Cantos: Predominantemente retos (Sharp edges), transmitindo uma sensação de precisão e modernidade.