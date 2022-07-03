import dotenv from "dotenv";
import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Koneksi Database Berhasil");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(router);

app.listen(5000, () => {
  console.log("Server berjalan pada port 5000");
});
