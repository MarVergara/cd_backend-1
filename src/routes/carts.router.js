const express = require("express");
const router = express.Router();
const CartManager = require("../data/CartManager");
const ProductManager = require("../data/ProductManager");

const cartManager = new CartManager();
const productManager = new ProductManager();

// CREATE CART
router.post("/", async (req, res) => {
  try {
    const newCart = await cartManager.createCart();
    res.status(201).json(newCart);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET CART
router.get("/:cid", async (req, res) => {
  try {
    const cart = await cartManager.getCartById(req.params.cid);
    if (!cart) return res.status(404).json({ error: "Cart not found" });
    res.json(cart.products);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ADD PRODUCT TO CART
router.post("/:cid/product/:pid", async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const product = await productManager.getById(pid);

    if (!product) return res.status(404).json({ error: "Product not found" });

    const updated = await cartManager.addProduct(cid, pid);
    if (!updated) return res.status(404).json({ error: "Cart not found" });

    res.json(updated);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
