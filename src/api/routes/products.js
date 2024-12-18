import express from "express";

const router = express.Router();

// List of products simulating DB
const products = [
  {
    "_id" : 1111111,
    "productName" : "FIBRA 1000MB",
    "mbSpeed": 1000,
    "gbData": null,
    "productTypeName" : "ftth",
    "numeracioTerminal" : 933933933,
    "soldAt" : "2019-01-09 14:26:17",
    "customerId" : "11111"
    },
    {
    "_id" : 1111112,
    "productName" : "MOBIL 500GB",
    "mbSpeed": null,
    "gbData": 500,
    "productTypeName" : "4G",
    "numeracioTerminal" : 696696969,
    "soldAt" : "2020-08-01 18:30:27",
    "customerId" : "11111"
  }
];

router.get("/", (_req, res) => {
  res.json(products);
});

router.get("/:id", (_req, res) => {
  const product = products.find((product) => product._id === parseInt(_req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

export default router;