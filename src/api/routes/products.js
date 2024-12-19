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
  },
  {
    "_id" : 1111113,
    "productName" : "FIBRA 300MB",
    "mbSpeed": 300,
    "gbData": null,
    "productTypeName" : "ftth",
    "numeracioTerminal" : 931234567,
    "soldAt" : "2021-03-15 10:15:00",
    "customerId" : "11112"
  },
  {
    "_id" : 1111114,
    "productName" : "MOBIL 10GB",
    "mbSpeed": null,
    "gbData": 10,
    "productTypeName" : "4G",
    "numeracioTerminal" : 697654321,
    "soldAt" : "2022-09-20 16:45:30",
    "customerId" : "11113"
  },
  {
    "_id" : 1111115,
    "productName" : "FIBRA 500MB",
    "mbSpeed": 500,
    "gbData": null,
    "productTypeName" : "ftth",
    "numeracioTerminal" : 935678901,
    "soldAt" : "2023-01-10 09:30:00",
    "customerId" : "11114"
  },
  {
    "_id" : 1111116,
    "productName" : "MOBIL 20GB",
    "mbSpeed": null,
    "gbData": 20,
    "productTypeName" : "4G",
    "numeracioTerminal" : 691234567,
    "soldAt" : "2022-11-05 14:20:00",
    "customerId" : "11115"
  },
  {
    "_id" : 1111117,
    "productName" : "FIBRA 100MB",
    "mbSpeed": 100,
    "gbData": null,
    "productTypeName" : "ftth",
    "numeracioTerminal" : 932345678,
    "soldAt" : "2020-06-30 11:00:00",
    "customerId" : "11116"
  },
  {
    "_id" : 1111118,
    "productName" : "MOBIL 5GB",
    "mbSpeed": null,
    "gbData": 5,
    "productTypeName" : "4G",
    "numeracioTerminal" : 698765432,
    "soldAt" : "2021-12-24 18:30:00",
    "customerId" : "11116"
  }
];

router.get("/", (_req, res) => {
  res.json(products);
});

router.get("/:clientId", (_req, res) => {
  const clientProducts = products.filter((product) => product.customerId === _req.params.clientId);
  return clientProducts.length > 0 ? res.json(clientProducts) : res.json([]);
});

export default router;