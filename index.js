import express from "express";
import router from "./app/router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to simple E-commerce API",
    status: "Under Development",
    purpose: "Learning to create an API",
    author: "Kristiyan Laoli",
    note: "For more details about the endpoints, please refer to the README file.",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

app.use(router);

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on port ${process.env.APP_PORT}`);
});
