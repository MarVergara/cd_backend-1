const express = require("express");
const router = express.Router();
const ProductManager = require("../data/ProductManager");

const productManager = new ProductManager();

// GET all
router.get("/", async (req, res) => {
  try {
    const products = await productManager.getAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET by id
router.get("/:pid", async (req, res) => {
  try {
    const product = await productManager.getById(req.params.pid);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST
router.post("/", async (req, res) => {
  try {
    const newProduct = await productManager.create(req.body);
    res.status(201).json(newProduct);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT
router.put("/:pid", async (req, res) => {
  try {
    const updated = await productManager.update(req.params.pid, req.body);
    if (!updated) return res.status(404).json({ error: "Product not found" });
    res.json(updated);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE
router.delete("/:pid", async (req, res) => {
  try {
    const deleted = await productManager.delete(req.params.pid);
    if (!deleted) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
