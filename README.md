# BackEND

Repositório de estudos e exercícios de desenvolvimento backend.

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `js-basico/` | Exercícios e práticas de JavaScript básico |
| `minha primeira api/` | API de livros feita com Node.js e Express |

Dentro de `minha primeira api/`:
- `controllers/`: lógica de manipulação dos livros.
- `routes/`: definição das rotas da API.
- `middlewares/`: funções executadas antes das rotas.
- `index.js`: inicialização do servidor.
- `package.json`: dependências e comandos do projeto.

## Tecnologias

As dependências declaradas no `package.json` da API incluem Express e Nodemon. O projeto usa JavaScript com módulos ES.

## Como executar a API

No terminal, entre na pasta do projeto:

```bash
cd "minha primeira api"
npm install
npm run dev
```

O servidor usa a porta 3000. O comando `npm run dev` inicia o servidor com Nodemon; `npm start` executa `node index.js`.

## Rotas da API de livros

Base: `/livros`

| Método | Rota | Finalidade |
|---|---|---|
| GET | `/livros` | Lista os livros |
| GET | `/livros/emprestimosStatus` | Lista os livros disponíveis |
| GET | `/livros/:id` | Busca um livro por ID |
| POST | `/livros` | Cadastra um livro |
| PATCH | `/livros/emprestimosStatus/:id` | Empresta um livro |
| PATCH | `/livros/devolver/:id` | Registra a devolução |
| PATCH | `/livros/:id` | Atualiza parcialmente um livro |
| PUT | `/livros/:id` | Atualiza um livro |
| DELETE | `/livros/:id` | Exclui um livro |

### Exemplo de cadastro

Envie uma requisição `POST` para `http://localhost:3000/livros` com o cabeçalho `Content-Type: application/json` e o corpo:

```json
{
  "dsTitulo": "O Senhor dos Anéis",
  "dsAutor": "J. R. R. Tolkien"
}
```

Os livros são armazenados em um array no código, portanto os dados não são persistidos em um banco de dados.

[ADICIONAR PRINT AQUI]
