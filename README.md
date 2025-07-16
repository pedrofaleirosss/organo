# 📁 Organo - Organize seus times e colaboradores de forma prática

![Banner do projeto](public/img/banner.png)

---

## 📌 Sobre o projeto

O **Organo** é uma aplicação web onde você pode **criar times**, **adicionar colaboradores** a esses times, e mantê-los **organizados em um só lugar**.

Este projeto foi desenvolvido como **primeiro contato com React**, em um curso da [**Alura**](https://www.alura.com.br), em 2024, com o objetivo de aprender os principais conceitos da biblioteca e aplicar na prática.

---

## 🚀 Funcionalidades

✅ Criar novos **times** com nome e cor personalizada <br>
✅ Adicionar **colaboradores** com nome, cargo, imagem e time <br>
✅ Excluir colaboradores <br>
✅ Alterar cor dos times dinamicamente <br>
✅ Visualização organizada dos cards por time

---

## 🧠 Aprendizados

Durante o desenvolvimento, foram aprendidos conceitos fundamentais do React, como:

- 📦 Estrutura de pastas (`public`, `src`, etc.)
- 🧱 Componentes funcionais e reutilizáveis
- 🔄 Props e estados (`useState`)
- 🎯 Comunicação entre componentes
- 🧠 Renderização condicional
- 🎨 Estilização por componente
- 🧹 Organização e separação dos arquivos por responsabilidade

---

## 📷 Demonstrações

<img width="80%" alt="image" src="https://github.com/user-attachments/assets/d2bae40e-bff3-464d-b3fc-16cc6528cd74" />
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/c3b4e9e3-aeae-43f4-b52f-fe0c5e126d08" />
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/98fc947e-bb59-4dde-86c6-ee776f5347db" />

---

## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

- ⚛️ **[React](https://reactjs.org/)** – Biblioteca JavaScript para criação de interfaces de usuário baseadas em componentes.
- 🧠 **Hooks (`useState`)** – Manipulação de estados internos dos componentes de forma funcional e reativa.
- 🧩 **Componentes reutilizáveis** – Separação clara e reutilizável de funcionalidades como `Botão`, `Campo`, `ListaSuspensa` e `Colaborador`.
- 🆔 **[UUID](https://www.npmjs.com/package/uuid)** – Geração de identificadores únicos para times e colaboradores.
- 📦 **[Node.js](https://nodejs.org/)** & **NPM** – Ambiente de execução e gerenciamento de pacotes.

---

## 📁 Estrutura do Projeto

```
organo/
├── public/
│ └── img/ # Imagens e ícones exibidss no site
│
├── src/
│ ├── components/
│ │ ├── Banner/ # Componente de banner principal
│ │ ├── Botao/ # Componente reutilizável de botão
│ │ ├── Campo/ # Campo de entrada (input) personalizado
│ │ ├── Colaborador/ # Card do colaborador com imagem, nome e cargo
│ │ ├── Formulario/ # Formulário de criação de times e colaboradores
│ │ ├── ListaSuspensa/ # Componente de select (dropdown) de times
│ │ ├── Rodape/ # Rodapé com redes sociais, logo e autor
│ │ └── Time/ # Renderiza os cards de cada time e seus colaboradores
│ │
│ ├── App.js # Componente principal do React (container geral)
│ ├── index.js # Ponto de entrada da aplicação React
│ └── index.css # Estilos globais
│
├── package.json # Configurações e dependências do projeto
├── README.md # Documentação do projeto
└── .gitignore # Arquivos e pastas ignoradas pelo Git
```

---

## 📂 Como executar

1. Clone o repositório:
```
git clone https://github.com/pedrofaleirosss/organo.git
```

2. Acesse a pasta:
```
cd organo
```

3. Instale as dependências:
```
npm install
```

4. Execute o projeto:
```
npm start
```

---

## 👨‍💻 Autor

Desenvolvido com 💙 por [**Pedro Faleiros**](https://github.com/pedrofaleirosss)
