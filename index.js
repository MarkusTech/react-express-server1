const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const hostname = "localhost";

dotenv.config({ path: "./.env" });

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "/public")));

// db connection
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

//importing the users from routes
app.use("/users", require("./routes/users"));

//  app listener and the host and the port
//  app.listen(port, hostname, () => {
app.listen(port, () => {
  console.log(`Server is started at http://${hostname}:${port}`);
  db.connect((err) => {
    if (err) {
      console.log("Database error: " + err);
    } else {
      console.log("DB connected");
    }
  });
});
