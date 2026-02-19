# 🚀 ENTREGA-1

![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![Status](https://img.shields.io/badge/Status-Completed-success)

**Assignment 1 -- REST API with FileSystem Persistence**\
Project developed using Node.js and Express to manage products and
shopping carts with JSON file storage.

------------------------------------------------------------------------

## 🎯 Objective

Develop a server that allows:

-   Creating, listing, updating, and deleting products.
-   Creating carts and adding products to them.
-   Persisting data using JSON files (`products.json` and `carts.json`).
-   Implementing routes using `express.Router()`.
-   Running the server on port **8080**.

------------------------------------------------------------------------

## ⚙️ Technologies

-   Node.js\
-   Express\
-   FileSystem (`fs`)\
-   UUID

------------------------------------------------------------------------

## 📁 Project Structure

    ENTREGA-1/
    │
    ├── package.json
    ├── index.js                   # Application entry point
    │
    ├── src/
    │   ├── app.js                 # Middleware and router configuration
    │   │
    │   ├── routes/
    │   │   ├── products.router.js
    │   │   └── carts.router.js
    │   │
    │   └── data/
    │       ├── ProductManager.js
    │       ├── CartManager.js
    │       ├── products.json
    │       └── carts.json

------------------------------------------------------------------------

## 🧱 Endpoints

### 📦 Products (`/api/products`)


| Method | Route   | Description                |
| ------ | ------- | -------------------------- |
| GET    | `/`     | Get all products           |
| GET    | `/:pid` | Get a product by ID        |
| POST   | `/`     | Create a new product       |
| PUT    | `/:pid` | Update an existing product |
| DELETE | `/:pid` | Delete a product by ID     |


------------------------------------------------------------------------

### 🛒 Carts (`/api/carts`)

| Method | Route                | Description                                           |
| ------ | -------------------- | ----------------------------------------------------- |
| POST   | `/`                  | Create a new cart                                     |
| GET    | `/:cid`              | Get products from a specific cart                     |
| POST   | `/:cid/product/:pid` | Add a product to a cart (increase quantity if exists) |


------------------------------------------------------------------------

## 📦 Data Structure

### 🛍 Product

Each product has the following structure:

``` json
{
  "id": "Auto-generated UUID",
  "title": "String",
  "description": "String",
  "code": "String",
  "price": 0,
  "status": true,
  "stock": 0,
  "category": "String",
  "thumbnails": ["img1.jpg", "img2.jpg"]
}
```

-   The `id` is automatically generated.
-   The `id` cannot be modified via PUT.
-   Products are stored in `products.json`.

------------------------------------------------------------------------

### 🛒 Cart

Each cart has the following structure:

``` json
{
  "id": "Auto-generated UUID",
  "products": [
    {
      "product": "PRODUCT_ID",
      "quantity": 1
    }
  ]
}
```

-   Only the product ID is stored inside the cart.
-   If the same product is added again, the `quantity` field increases.
-   Carts are stored in `carts.json`.

------------------------------------------------------------------------

## 💾 Persistence

Data persistence is implemented using Node.js `fs` module.

Data is stored in:

-   `src/data/products.json`
-   `src/data/carts.json`

Each create, update, or delete operation automatically updates the
corresponding JSON file.

------------------------------------------------------------------------

## ▶️ Installation & Execution

1.  Clone the repository.

2.  Install dependencies:

``` bash
npm install
```

3.  Start the server:

``` bash
npm start
```

4.  The server runs at:

```
http://localhost:8080
```
------------------------------------------------------------------------

## ✅ Project Status

✔ Server running on port 8080\
✔ Express Router implementation\
✔ FileSystem persistence\
✔ Full Product CRUD\
✔ Cart management with quantity increment logic\
✔ `node_modules` excluded from repository

