const express = require("express");
const router = express.Router();

const { getAllProducts, getProductById, } = require('../controllers/productControllers')

//desc: ini digunakan untuk mengambil seluruh product dari database
//route: GET /api/products
//access: Publis
router.get("/", getAllProducts);

//desc: ini digunakan untuk mengambil satu product dari database berdasarkan id
//route: GET /api/products/:id
//access: Publis
router.get("/:id", getProductById);

module.exports = router;