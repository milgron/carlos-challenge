import express from "express";

const router = express.Router();

// List of clients simulating DB
const clients = [
  {
    "_id" : 555555,
    "docType" : "nif",
    "docNum" : "11223344E",
    "email" : "it@parlem.com",
    "customerId" : "11111",
    "givenName" : "Enriqueta",
    "familyName1" : "Parlem",
    "phone" : "668668668",
  },
  {
    "_id" : 555556,
    "docType" : "nif",
    "docNum" : "11223344F",
    "email" : "test@parlem.com",
    "customerId" : "11112",
    "givenName" : "Test",
    "familyName1" : "Test",
    "phone" : "668668668",
  },
  {
    "_id" : 555557,
    "docType" : "nif",
    "docNum" : "11223344G",
    "email" : "jordi@parlem.com",
    "customerId" : "11113",
    "givenName" : "Jordi",
    "familyName1" : "Pujol",
    "phone" : "668668669",
  },
  {
    "_id" : 555558,
    "docType" : "nif",
    "docNum" : "11223344H",
    "email" : "marta@parlem.com",
    "customerId" : "11114",
    "givenName" : "Marta",
    "familyName1" : "Rovira",
    "phone" : "668668670",
  },
  {
    "_id" : 555559,
    "docType" : "nif",
    "docNum" : "11223344I",
    "email" : "pere@parlem.com",
    "customerId" : "11115",
    "givenName" : "Pere",
    "familyName1" : "Aragonès",
    "phone" : "668668671",
  },
  {
    "_id" : 555560,
    "docType" : "nif",
    "docNum" : "11223344J",
    "email" : "anna@parlem.com",
    "customerId" : "11116",
    "givenName" : "Anna",
    "familyName1" : "Gabriel",
    "phone" : "668668672",
  },
  {
    "_id" : 555561,
    "docType" : "nif",
    "docNum" : "11223344K",
    "email" : "carles@parlem.com",
    "customerId" : "11117",
    "givenName" : "Carles",
    "familyName1" : "Boix",
    "phone" : "668668673"
  },
  {
    "_id" : 555562,
    "docType" : "nif",
    "docNum" : "11223344L",
    "email" : "laura@parlem.com",
    "customerId" : "11118",
    "givenName" : "Laura",
    "familyName1" : "Borràs",
    "phone" : "668668674",
  },
  {
    "_id" : 555563,
    "docType" : "nif",
    "docNum" : "11223344M",
    "email" : "oriol@parlem.com",
    "customerId" : "11119",
    "givenName" : "Oriol",
    "familyName1" : "Junqueras",
    "phone" : "668668675",
  },
  {
    "_id" : 555564,
    "docType" : "nif",
    "docNum" : "11223344N",
    "email" : "meritxell@parlem.com",
    "customerId" : "11120",
    "givenName" : "Meritxell",
    "familyName1" : "Serret",
    "phone" : "668668676",
  }
];

router.get("/", (_req, res) => {
  res.json(clients);
});

router.get("/:id", (_req, res) => {
  const client = clients.find((client) => client._id === parseInt(_req.params.id));
  if (!client) {
    return res.status(404).json({ message: "Client not found" });
  }
  res.json(client);
});

export default router;