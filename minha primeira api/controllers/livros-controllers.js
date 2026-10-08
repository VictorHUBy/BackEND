//===================================================//
//   BANCO DE DADOS DOS LIVROS E OS PROXIMOS         //
//===================================================//

let livros = [
    { idLivro: 1, dsTitulo: "As Crônicas de Nárnia", dsAutor: "C. S. Lewis", fgDisponivel: true },
    { idLivro: 2, dsTitulo: "Dom Casmurro", dsAutor: "Machado de Assis", fgDisponivel: true },
    { idLivro: 3, dsTitulo: "O Hobbit", dsAutor: "J. R. R. Tolkien", fgDisponivel: true },
]; // nosso "banco de dados"

let proximoId = 4; // id PARA CONTINUAR NA HORA DA CRIACAO




//===================================================//
// FUNCOES OU HABILIDADES QUE DA PARA FAZER NO "SITE"//
//===================================================//

// LISTAR todos, basicamente, vai pegar o array todo e mostrar
export function listarLivros(req, res) {
    res.json(livros);
}

// LISTAR só os disponíveis, vai usar o filter percorre todo o array e cria um novo com os filtros, tem a logica que...
export function listarDisponiveis(req, res) { // diz que so vai aparecer e a tag fdDisponivel for true ai ele vai mostra na tela o novo array
    const disponiveis = livros.filter((livro) => livro.fgDisponivel === true);
    res.json(disponiveis);
}

// BUSCAR um livro pelo id
export function buscarLivro(req, res) {
    const id = Number(req.params.id); // o id da URL chega como texto, então converto para número, e la itnha :id, que pega qualquer cosia e armazana com o nome id
    const livro = livros.find((l) => l.idLivro === id); // se não achar, livro fica undefined
    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado" });// aqui é para justifcair em caso de erro e coisa assim
    }

    res.json(livro);
}

// CRIAR livro
export function criarLivro(req, res) {
    const { dsTitulo, dsAutor } = req.body ?? {}; // pega título e autor do Body

    if (!dsTitulo || !dsAutor) {
        return res.status(400).json({ mensagem: "Informe dsTitulo e dsAutor" });
    }

    const novoLivro = { idLivro: proximoId, dsTitulo, dsAutor, fgDisponivel: true };
    livros.push(novoLivro); // coloca no "banco"
    proximoId++; // o próximo livro vai ter um id novo

    res.status(201).json(novoLivro);
}

// EMPRESTAR (fgDisponivel vira false)
export function emprestarLivro(req, res) {
    const livro = livros.find((l) => l.idLivro === Number(req.params.id));

    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado" });
    }

    if (livro.fgDisponivel === false) {
        return res.status(409).json({ mensagem: "Livro já está emprestado" });
    }

    livro.fgDisponivel = false;
    res.json(livro);
}

// DEVOLVER (fgDisponivel vira true)
export function devolverLivro(req, res) {
    const livro = livros.find((l) => l.idLivro === Number(req.params.id));

    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado" });
    }

    if (livro.fgDisponivel === true) {
        return res.status(409).json({ mensagem: "Livro já está disponível" });
    }

    livro.fgDisponivel = true;
    res.json(livro);
}

// ALTERAR SÓ O QUE VIER (título e/ou autor)
export function atualizarParcialmente(req, res) {
    const livro = livros.find((l) => l.idLivro === Number(req.params.id));

    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado" });
    }

    const { dsTitulo, dsAutor } = req.body ?? {};

    if (dsTitulo) livro.dsTitulo = dsTitulo; // só muda se veio no Body
    if (dsAutor) livro.dsAutor = dsAutor; // só muda se veio no Body

    res.json(livro);
}

// ALTERAR TUDO (título e autor são obrigatórios)
export function atualizarLivro(req, res) {
    const livro = livros.find((l) => l.idLivro === Number(req.params.id));

    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado" });
    }

    const { dsTitulo, dsAutor } = req.body ?? {};

    if (!dsTitulo || !dsAutor) {
        return res.status(400).json({ mensagem: "Informe dsTitulo e dsAutor" });
    }

    livro.dsTitulo = dsTitulo;
    livro.dsAutor = dsAutor;
    res.json(livro);
}

// EXCLUIR
export function excluirLivro(req, res) {
    const posicao = livros.findIndex((l) => l.idLivro === Number(req.params.id)); // -1 se não achar

    if (posicao === -1) {
        return res.status(404).json({ mensagem: "Livro não encontrado" });
    }

    livros.splice(posicao, 1); // remove 1 item dessa posição
    res.sendStatus(204); // 204 = deu td certo
}
