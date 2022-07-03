import express from "express";
import db from "./config/Database.js";
const app = express();

try {
  await db.authenticate();
  console.log("Koneksi Database Berhasil");
} catch (error) {
  console.log(error);
}

app.listen(5000, () => {
  console.log("Server berjalan pada port 5000");
});
