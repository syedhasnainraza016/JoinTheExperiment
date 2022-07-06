require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const fileUpload = require("express-fileupload");
const app = express();

const dbConnection = require("./db");
const routes = require("./src/routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(fileUpload());

app.use(express.static("build"));
app.use("/public", express.static("public"));

app.use("/api", routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
