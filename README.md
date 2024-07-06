# Cadastro API

Esta é uma API básica de cadastro desenvolvida com Fastify, TypeScript, MongoDB e Prisma. A API permite operações de Create, Read e Delete em um banco de dados MongoDB.

## Requisitos

- Node.js
- MongoDB
- Prisma

## Configuração do Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/cadastro-api.git
    cd cadastro-api
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o arquivo `.env` com as informações de conexão do MongoDB:
    ```
    DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/seubanco?retryWrites=true&w=majority"
    ```

4. Configure o Prisma:
    ```bash
    npx prisma init
    ```

5. Execute a migração do banco de dados:
    ```bash
    npx prisma migrate dev --name init
    ```

## Executando a API

1. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

2. A API estará disponível em `http://localhost:3301`.

## Endpoints

### Criar um novo cadastro

- **URL**: `/create`
- **Método**: `POST`
- **Corpo da Requisição**:
    ```json
    {
        "name": "string",
        "email": "string"
    }
    ```

- **Resposta**:
    ```json
    {
        "id": "string",
        "name": "string",
        "email": "string",
        "status": true,
        "created_at": "string",
        "updated_at": "string"
    }
    ```

### Listar todos os cadastros

- **URL**: `/all`
- **Método**: `GET`

- **Resposta**:
    ```json
    [
        {
            "id": "string",
            "name": "string",
            "email": "string",
            "status": true,
            "created_at": "string",
            "updated_at": "string"
        }
    ]
    ```

### Deletar um cadastro

- **URL**: `/delete`
- **Método**: `DELETE`
- **Query Params**:
    - `id`: ID do cadastro a ser deletado

- **Resposta**:
    ```json
    {
        "message": "Customer deleted successfully"
    }
    ```

## Estrutura do Projeto

- `prisma/`
    - `schema.prisma`: Arquivo de configuração do Prisma
- `src/`
    - `index.ts`: Ponto de entrada da aplicação
    - `routes/`
        - `cadastro.ts`: Definição das rotas de cadastro
    - `controllers/`
        - `CreateCustomController.ts`: Controlador para criação de cadastros
        - `DeleteCustomerController.ts`: Controlador para deletar cadastros
        - `ListCustomController.ts`: Controlador para listar cadastros
    - `service/`
        - `CreateCustomerService.ts`: Serviço para criação de cadastros
        - `DeleteCustomerService.ts`: Serviço para deletar cadastros
        - `ListCustomerService.ts`: Serviço para listar cadastros
    - `prisma/`
        - `prisma.ts`: Configuração do cliente Prisma

