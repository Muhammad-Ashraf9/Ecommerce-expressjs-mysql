const express = require("express");

const {
  getProducts,
  getIndex,
  getCart,
  getProductDetails,
  getOrders,
  postCart,
} = require("../controllers/shop");

const router = express.Router();

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/products/:productId", getProductDetails);

router.get("/cart", getCart);

router.post("/cart", postCart);

router.get("/orders", getOrders);

router.get("/checkout");

module.exports = router;
