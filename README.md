# Landing Page de um evento tech 🚀

Landing page para evento de tecnologia, construída com HTML, SCSS e JavaScript.

## 🔧 Tecnologias utilizadas
- **HTML5**: estruturação semântica da página  
- **SCSS**: folhas de estilo organizadas e reutilizáveis  
- **JavaScript puro**: interações dinâmicas e responsividade  
- **Node.js** + **npm**: gerenciamento de dependências  
- **Sharp**: processamento de imagens (configuração via `sharp.config.json`)

## 📁 Estrutura de pastas

```
├── src/
│   ├── index.html
│   ├── scss/
│   ├── js/
│   └── assets/
├── .gitignore
├── package.json
├── package-lock.json
└── sharp.config.json
```

## 🚀 Como rodar localmente

1. Clone o repositório:  
   ```bash
   git clone https://github.com/DEV-Gabriel7/LP_evento_tech.git
   cd LP_evento_tech
   ```

2. Instale as dependências:  
   ```bash
   npm install
   ```

3. Gere assets e compile SCSS (conforme scripts no `package.json`):  
   ```bash
   npm run build
   ```

4. Abra `src/index.html` no navegador ou use um servidor local, por exemplo:
   ```bash
   npm install -g serve
   serve src
   ```

## ✨ Funcionalidades

- Layout responsivo para desktops e mobile
- Seções típicas de evento:
  - Hero/banner com chamada principal
  - Sobre o evento
  - Agenda/programação
  - Inscrição (botões que disparam modais ou redirecionam)
  - Depoimentos ou parceiros
  - Rodapé informativo
- JavaScript para:
  - Navegação suave (scroll suave)
  - Abrir/fechar menus ou modais
  - Validação básica (ex.: formulário de inscrição)

## 🌐 Deploy

Hospedado via Vercel:  
👉 [lp-evento-tech.vercel.app](https://lp-evento-tech.vercel.app)

## 👨‍💻 Autor

Desenvolvido por **DEV-Gabriel7**  
🔗 GitHub: [@DEV-Gabriel7](https://github.com/DEV-Gabriel7)  
📧 Contato: *https://www.linkedin.com/in/dev-gabriel7/*
