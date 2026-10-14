# BackEND

Repository for backend studies and exercises.

## Folder structure

| Folder | What is inside |
|--------|----------------|
| `js-basico/` | Basic JavaScript exercises and practice files |
| `minha primeira api/` | First API with Node.js and Express (books API) |

### Inside `minha primeira api/`

| Folder / File | What it does |
|---------------|--------------|
| `controllers/` | Functions that handle the book logic |
| `routes/` | Defines the API routes |
| `middlewares/` | Code that runs before the routes (request log) |
| `index.js` | Starts the server |
| `package.json` | Project settings and dependencies |

## How to run the API

1. Go to the API folder:
```bash
cd "minha primeira api"
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

The server runs on port 3000.

## Technologies

- Node.js
- Express 5.2.1
- Nodemon 3.1.14 (for development)

## Available scripts

- `npm start` → runs with Node
- `npm run dev` → runs with Nodemon (restarts on changes)

## API Routes (books)

Base path: `/livros`

| Method | Path | Description |
|--------|------|-------------|
| GET | `/livros` | List all books |
| GET | `/livros/emprestimosStatus` | List only available books |
| GET | `/livros/:id` | Get one book by id |
| POST | `/livros` | Create a new book |
| PATCH | `/livros/emprestimosStatus/:id` | Borrow a book |
| PATCH | `/livros/devolver/:id` | Return a book |
| PATCH | `/livros/:id` | Update title and/or author (partial) |
| PUT | `/livros/:id` | Update title and author (full) |
| DELETE | `/livros/:id` | Delete a book |

## Request examples

**1. List all books**
```
GET http://localhost:3000/livros
```

**2. Create a book**
```
POST http://localhost:3000/livros
Content-Type: application/json

{
  "dsTitulo": "O Senhor dos Anéis",
  "dsAutor": "J. R. R. Tolkien"
}
```

**3. Borrow a book**
```
PATCH http://localhost:3000/livros/emprestimosStatus/1
```
