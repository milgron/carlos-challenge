import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import clientsRoutes from "./src/api/routes/clients.js";
import productsRoutes from "./src/api/routes/products.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use("/api/clients", clientsRoutes);
app.use("/api/products", productsRoutes);
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});