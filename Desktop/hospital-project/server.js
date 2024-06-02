import express from "express";
import mongoose from "mongoose";
import ejs from "ejs";
import methodOverride from "method-override";
import commentRouters from "./routers/commentRoutes.js";

const app = express();

//MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/hospital")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB'e bağlanırken hata oluştu:", err));

app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Page renders
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/tedavi-yontemleri", (req, res) => {
  res.render("tedavi-yontemleri");
});

app.get("/hastaliklar", (req, res) => {
  res.render("hastaliklar");
});

app.get("/doktor-yorumlari", (req, res) => {
  res.render("doktor-yorumlari");
});

// Comment routes
app.use("/comments", commentRouters);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
