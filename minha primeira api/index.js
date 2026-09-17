import express from 'express';

const app = express();


// app.get("/produtos", (req, res) => {
//     const { categoria } = req.query;
//     const resultado = produtos.filter((produto) => produto.categoria === categoria);
//     res.json(resultado);
// });
let livros = [
    {
        idLivro: 1,
        idTitulo: "as cronicas",
        idAutor: "Autozin",

    }
]



app.get("/", function(req,res){
    res.send("Seja bem vindo a gestao de livros");
});

app.get("/livros", function(req, res){
    res.json(livros);
});

app.get("/livros/:id", (req, res) => {
    console.log(res.params.id);
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        console.log("caiuaqui")
        .status(400)
        .json({mensagem:"dada"})
    }

});



app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

// URL certa pra testar:
// http://localhost:3000/produtos?categoria=eletronicos