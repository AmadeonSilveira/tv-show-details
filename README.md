# TV Show Details

Aplicação front-end que exibe detalhes de uma série de TV, incluindo temporadas, episódios e elenco.  
Os dados são obtidos dinamicamente por meio de APIs externas e apresentados em uma interface responsiva, com foco em organização de código, clareza e usabilidade.

---

## Tecnologias utilizadas
- **React + Vite**
- **Sass (SCSS)** — para organização e reuso de estilos
- **BEM** — arquitetura de nomenclatura CSS
- **ES6+**
- **React Icons**
- **Google Fonts — Nunito**

---

## Funcionalidades
- Exibição de informações gerais da série
- Listagem de episódios por temporada
- Navegação entre temporadas
- Abertura de detalhes do episódio (sinopse, imagem e duração)
- Seção de elenco
- Estado de carregamento (loading)
- Responsividade para diferentes tamanhos de tela
- Deploy automatizado via GitHub Pages

---

## Estrutura do projeto
```
src/
├── components/
│   ├── TabsHeader/
│   └── Loading/
├── pages/
│   └── ShowDetails/
├── services/
│   └── api.js
├── styles/
│   ├── _variables.scss
│   ├── _reset.scss
│   ├── _fonts.scss
│   └── global.scss
└── main.jsx
```

---

## Como executar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/amadeonsilveira/tv-show-details.git
cd tv-show-details
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Ambiente de desenvolvimento
```bash
npm run dev
```

### 4. Build de produção
```bash
npm run build
npm run preview
```

### 5. Deploy no GitHub Pages
O projeto é publicado automaticamente na branch `gh-pages` através do script:
```bash
npm run deploy
```

A aplicação está disponível em:  
**https://amadeonsilveira.github.io/tv-show-details/**

## Licença
Este projeto é de uso livre para fins de demonstração e aprendizado.

---

## Demonstração
[Acesse o projeto online](https://amadeonsilveira.github.io/tv-show-details/)
