import Router from 'express'

const router = Router();

router.get("/livros", () => {});

router.patch("/livros/devolver/:id", () => {});
router.patch("/livros/emprestimosStatus/:id", () => {});
router.get("/livros/emprestimosStatus", () => {});
router.get("/livros/:id", () => {});
router.post("/livros", () => {});
router.patch("/livros/:id", () => {});
router.put("/livros/:id", () => {});
router.delete("/livros/:id", () => {});

export default router;