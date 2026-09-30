import express from "express";

function validaParametro(parametro) {
    const numero = Number(parametro);

    // true = inválido
    // false = válido
    return !Number.isInteger(numero);
}

const app = express();

app.use(express.json());

// --------------------------------------------------
// BANCO DE DADOS
// --------------------------------------------------

let ultimo_id = 3;

let livros = [
    {
        idLivro: 1,
        dsTitulo: "As Crônicas de Nárnia",
        dsAutor: "C. S. Lewis",
        fgDisponivel: true,
    },

    {
        idLivro: 2,
        dsTitulo: "Dom Casmurro",
        dsAutor: "Machado de Assis",
        fgDisponivel: true,
    },

    {
        idLivro: 3,
        dsTitulo: "O Hobbit",
        dsAutor: "J. R. R. Tolkien",
        fgDisponivel: true,
    },
];

// --------------------------------------------------
// ROTA PRINCIPAL
// --------------------------------------------------

app.get("/", (req, res) => {
    res.send("Seja bem-vindo à gestão de livros");
}); 

/// para devolver
app.patch("/livros/devolver/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = livros.findIndex((livro) => {
        return livro.idLivro === id;
    });

    livros[index].fgDisponivel = true;

    res.json(livros[index]);
});
// ---------------------------------------------------
// Mudar para false o emprestimo e pegar emprestado
// ---------------------------------------------------

app.patch("/livros/emprestimosStatus/:id", (req, res) =>{

    const id = Number(req.params.id);

    const verificarIndex  = livros.findIndex((livro) => {
        return livro.idLivro === id;
    });

    if (verificarIndex === -1) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        });
    }

    livros[verificarIndex].fgDisponivel = false;
    
    res.json(livros[verificarIndex]);
    
})
// --------------------------------------------------
// mostrar disponibilidade
// --------------------------------------------------

app.get("/livros/emprestimosStatus", (req, res) =>{
    const livroDisponivel = livros.filter((verDisponibilidade) =>{
        return verDisponibilidade.fgDisponivel === true;
    });
    
    res.json(livroDisponivel);

});
// --------------------------------------------------
// GET - TODOS OS LIVROS
// --------------------------------------------------

app.get("/livros", (req, res) => {
    console.log("Chamando rota GET /livros");

    res.json(livros);
});

//Nesse codigo, é criado uma rota, aquilo que voce acessa como /ver ou /assistir, neste caso é /livros para mostrar todos os livros


// --------------------------------------------------
// GET - UM LIVRO PELO ID
// --------------------------------------------------

app.get("/livros/:id", (req, res) => {
    const id = Number(req.params.id);

    if (validaParametro(req.params.id)) {
        return res
            .status(400)
            .json({
                mensagem: "O parâmetro precisa ser um número válido",
            });
    }
//Por aqui em cima, eu criei um rota especifica para cada livro unico e depois usei uma logica para validar se é numero mesmo
    const livro = livros.find((livro) => {
        return livro.idLivro === id;
    });

    if (!livro) {
        return res
            .status(404)
            .json({
                mensagem: "Livro não encontrado",
            });
    }
//usando o metodo find, que percorre a lista e verifica que o idLivro = id, se for ele vai no if, caso for contrario, ele executa o if, se nao, ele so mostra a coisa do id que foi guardado
    res.json(livro);
});

// --------------------------------------------------
// POST - CRIAR LIVRO
// --------------------------------------------------

app.post("/livros", (req, res) => {
    const autor_enviado = req.body.dsAutor;
    const titulo_enviado = req.body.dsTitulo;

    if (!autor_enviado || !titulo_enviado) {
        return res
            .status(400)
            .json({
                mensagem: "dsAutor e dsTitulo são obrigatórios",
            });
    }

    const id_novo = ultimo_id + 1;

    const novo_livro = {
        idLivro: id_novo,
        fgDisponivel: true,
        dsTitulo: titulo_enviado,
        dsAutor: autor_enviado,
    };

    livros.push(novo_livro);

    ultimo_id = id_novo;

    res.status(201).json(novo_livro);
});

// --------------------------------------------------
// PATCH - ALTERAR PARCIALMENTE UM LIVRO
// --------------------------------------------------

app.patch("/livros/:id", (req, res) => {
    const id = Number(req.params.id);

    if (validaParametro(req.params.id)) {
        return res
            .status(400)
            .json({
                mensagem: "O parâmetro precisa ser um número válido",
            });
    }

    const index_livro = livros.findIndex((livro) => {
        return livro.idLivro === id;
    });

    if (index_livro === -1) {
        return res
            .status(404)
            .json({
                mensagem: "Livro não encontrado",
            });
    }

    const { dsTitulo, dsAutor } = req.body;

    if (!dsTitulo && !dsAutor) {
        return res
            .status(400)
            .json({
                mensagem: "Informe dsTitulo ou dsAutor para atualizar",
            });
    }

    if (dsTitulo) {
        livros[index_livro].dsTitulo = dsTitulo;
    }

    if (dsAutor) {
        livros[index_livro].dsAutor = dsAutor;
    }

    res.json(livros[index_livro]);
});

// --------------------------------------------------
// PUT - ALTERAR LIVRO
// --------------------------------------------------

app.put("/livros/:id", (req, res) => {
    const id = Number(req.params.id);

    if (validaParametro(req.params.id)) {
        return res
            .status(400)
            .json({
                mensagem: "O parâmetro precisa ser um número válido",
            });
    }

    const index_livro = livros.findIndex((livro) => {
        return livro.idLivro === id;
    });

    if (index_livro === -1) {
        return res
            .status(404)
            .json({
                mensagem: "Livro não encontrado",
            });
    }

    const { dsTitulo, dsAutor } = req.body;

    if (!dsTitulo || !dsAutor) {
        return res
            .status(400)
            .json({
                mensagem: "dsTitulo e dsAutor são obrigatórios",
            });
    }

    livros[index_livro].dsTitulo = dsTitulo;
    livros[index_livro].dsAutor = dsAutor;

    res.json(livros[index_livro]);
});

// --------------------------------------------------
// DELETE - EXCLUIR LIVRO
// --------------------------------------------------

app.delete("/livros/:id", (req, res) => {
    const id = Number(req.params.id);

    if (validaParametro(req.params.id)) {
        return res
            .status(400)
            .json({
                mensagem: "O identificador deve ser um número",
            });
    }

    const index_livro = livros.findIndex((livro) => {
        return livro.idLivro === id;
    });

    if (index_livro === -1) {
        return res
            .status(404)
            .json({
                mensagem: "Livro não encontrado",
            });
    }

    const livro_excluido = livros[index_livro];

    livros.splice(index_livro, 1);

    res.json({
        mensagem: "Livro excluído com sucesso",
        livro: livro_excluido,
    });
});

// --------------------------------------------------
// SERVIDOR
// --------------------------------------------------



app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});


