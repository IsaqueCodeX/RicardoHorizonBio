# Ricardo Horizon Bio

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Video](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

![Banner do Projeto](./public/banner.png)

## Sobre o Projeto

**Ricardo Horizon Bio** é uma solução *Link-in-Bio* de alta performance desenvolvida para profissionais do mercado imobiliário de alto padrão. O projeto resolve o problema de cartões de visita digitais genéricos, oferecendo uma experiência mobile-first imersiva, com carregamento instantâneo e design premium que reflete a sofisticação do portfólio do cliente.

[Ver Projeto Online (Demo)](#)

## Destaques Técnicos

Este projeto não é apenas uma página estática; é uma aplicação web moderna construída com decisões de engenharia focadas em escalabilidade e UX:

*   **Arquitetura Mobile-First:** Interface projetada nativamente para dispositivos móveis, garantindo usabilidade perfeita em qualquer tela.
*   **Performance Otimizada:** Utilização de `Vite` para build tool e lazy loading de componentes pesados.
*   **Animações Fluidas:** Integração profunda com `Framer Motion` para transições de 60fps (Scroll Reveal, Micro-interações).
*   **Design System Modular:** Implementação de componentes reutilizáveis baseados em `Shadcn UI` e `Tailwind CSS`, facilitando manutenção e consistência visual.
*   **Type-Safety:** Código 100% TypeScript com modo estrito (`strict: true`) ativado, minimizando erros em tempo de execução.
*   **Gerenciamento de Estado Distribuído:** Uso de Context API para gestão de estados globais (ex: Sidebar, Temas) sem prop drilling.

## Stack Tecnológica

*   **Core:** React 18, TypeScript, Vite
*   **Estilização:** Tailwind CSS, Class Variance Authority (CVA), PostCSS
*   **UI Components:** Shadcn UI (Radix Primitives)
*   **Animações:** Framer Motion, Tailwindcss Animate
*   **Gerenciamento de Dados:** TanStack Query (React Query)
*   **Roteamento:** React Router DOM
*   **Formulários:** React Hook Form, Zod (Validação de Schema)
*   **Visualização de Dados:** Recharts

## Instalação e Uso

Para executar este projeto localmente:

```bash
# 1. Clone o repositório
git clone https://github.com/IsaqueCodeX/HorizonViagens.git

# 2. Acesse a pasta do projeto
cd RicardoHorizonBio

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará rodando em `http://localhost:8080`.

## Estrutura de Arquivos

A organização do código segue uma estrutura limpa e intuitiva:

```text
src/
├── assets/          # Imagens, fontes e arquivos estáticos
├── components/      # Componentes React
│   ├── ui/          # Componentes base (Botões, Inputs, Cards - Shadcn)
│   └── ...          # Componentes de funcionalidade (Hero, Gallery, Footer)
├── hooks/           # Custom React Hooks
├── lib/             # Utilitários e funções auxiliares (cn, formatters)
├── pages/           # Páginas da aplicação (Roteamento)
├── App.tsx          # Componente Raiz e Configuração de Rotas
└── main.tsx         # Ponto de entrada da aplicação
```

## Autor

| Desenvolvedor | Portfolio | LinkedIn |
| :--- | :--- | :--- |
| **Isaque Santos** | [isaquesantosdev.com](https://isaquesantosdev.com/) | [Perfil LinkedIn](https://www.linkedin.com/in/isaque-santos-720b8b15a) |

---

*Desenvolvido com foco em Excelência e Performance.*
