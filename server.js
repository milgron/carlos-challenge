import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import clientsRoutes from "./src/api/routes/clients.js";
import productsRoutes from "./src/api/routes/products.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173'
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.use("/api/clients", clientsRoutes);
app.use("/api/products", productsRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(Number(port), '0.0.0.0', () => {
  console.log(`Running on port ${port}`);
}).on('error', (err) => {
  console.error('Error al iniciar el servidor:', err);
});
