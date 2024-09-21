
# Iara Games Platform

Este repositório contém o código-fonte da plataforma **Iara Games**, desenvolvida como parte do projeto de faculdade. A plataforma visa fornecer uma solução de cadastro e gerenciamento de usuários e jogos, utilizando **Java com Spring Boot** no back-end e front-end.

## Sumário
- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Repositório](#estrutura-do-repositório)
- [Instalação](#instalação)
  - [Back-end](#back-end)
  - [Front-end](#front-end)
- [Deploy](#deploy)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

A plataforma Iara Games oferece funcionalidades para cadastrar, listar e gerenciar usuários e jogos. Este projeto utiliza arquitetura de microserviços, separando o front-end e back-end em repositórios organizados.

## Tecnologias Utilizadas

- **Java 17**
- **Spring Boot 3**
- **MySQL** (para banco de dados)
- **Bootstrap** (para estilização do front-end)
- **Vercel** (para deploy do front-end)
- **Heroku/AWS** (para deploy do back-end)
  
## Estrutura do Repositório

O repositório está organizado da seguinte forma:

```plaintext
├── backend/                # Código-fonte do servidor (Java/Spring Boot)
│   ├── src/                # Código-fonte do aplicativo
│   └── README.md           # Instruções específicas do backend
├── frontend/               # Código-fonte do cliente
│   ├── src/                # Código-fonte do aplicativo
│   └── README.md           # Instruções específicas do frontend
├── docs/                   # Documentação do projeto (diagramas, instruções, etc.)
└── README.md               # Documento principal com instruções gerais
```

## Instalação

### Back-end

1. Clone o repositório:
   ```bash
   git clone https://github.com/lukesteves92/fiap.git
   ```
2. Navegue até a pasta do **backend**:
   ```bash
   cd backend
   ```
3. Configure o arquivo `application.properties` com as credenciais do banco de dados MySQL:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/iara_games
   spring.datasource.username=SEU_USUARIO
   spring.datasource.password=SUA_SENHA
   ```

4. Execute o back-end utilizando o Maven:
   ```bash
   mvn spring-boot:run
   ```

## Deploy

### Front-end (Vercel)

1. Conecte o repositório ao Vercel.
2. Configure as variáveis de ambiente no Vercel, se necessário.
3. Faça o deploy automaticamente via integração com GitHub.

### Back-end (Heroku/AWS)

1. Configure o projeto no Heroku ou AWS.
2. Defina as variáveis de ambiente, como o banco de dados e as URLs necessárias para o front-end.
3. Realize o deploy via GitHub ou usando scripts automáticos.

## Contribuição

Sinta-se à vontade para abrir issues e enviar pull requests. Siga as diretrizes de contribuição disponíveis na seção de `docs/`.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
