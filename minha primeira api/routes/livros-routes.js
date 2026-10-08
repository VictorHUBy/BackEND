import { Router } from "express"; // com chaves, é o Router de verdade
import {
    listarLivros,
    listarDisponiveis,
    buscarLivro,
    criarLivro,
    emprestarLivro,
    devolverLivro,
    atualizarParcialmente,
    atualizarLivro,
    excluirLivro,
} from "../controllers/livros-controllers.js";

const router = Router();

router.get("/", listarLivros); // GET /livros
router.get("/emprestimosStatus", listarDisponiveis); // antes do "/:id", senão "emprestimosStatus" vira um id
router.get("/:id", buscarLivro); // GET /livros/1
router.post("/", criarLivro); // POST /livros
router.patch("/emprestimosStatus/:id", emprestarLivro); // PATCH /livros/emprestimosStatus/1
router.patch("/devolver/:id", devolverLivro); // PATCH /livros/devolver/1
router.patch("/:id", atualizarParcialmente); // PATCH /livros/1
router.put("/:id", atualizarLivro); // PUT /livros/1
router.delete("/:id", excluirLivro); // DELETE /livros/1

export default router;
