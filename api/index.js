import express from "express";
import router from "../app/router.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Ganti dengan URL aplikasi React Anda
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello, welcome to ecommerce-api" });
});
app.use(router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

const port = process.env.APP_PORT || 3200;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
