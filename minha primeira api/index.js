import express from "express";
import livrosRouter from "./routes/livros-routes.js";
import logRequest from "./middlewares/log-request.js"; 


const app = express();
app.use(logRequest);
app.use(express.json()); // deixa o servidor ler o JSON do Body do Postman
app.use("/livros", livrosRouter); // tudo que está no router já começa com /livros

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

