import express from 'express'

const app = express();

app.get('/', (res, req) => {
    req.send("dede")

});

app.get("/livros", function(pergunta, resposta) {

    console.log('angelo hankfenrfioenr')
    resposta.send("Hello Wrold");
});

app.listen(3000);