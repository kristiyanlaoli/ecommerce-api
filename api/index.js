import express from "express";
import router from "../app/router.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello, welcome to ecommerce-api" });
});

app.use(router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
