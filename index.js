const app = require("./src/app");
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server for ENTREGA-1 listening on port http://localhost:${PORT}`);
});


app.get("/", (req, res) => {
  res.json({
    message: "API ENTREGA-1 funcionando 🚀",
    endpoints: {
      products: "/api/products",
      carts: "/api/carts",
    },
  });
});
