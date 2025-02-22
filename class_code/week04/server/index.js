/* Project setup: For the server
1 - new project folder
2 - open an integrated terminal
3 - run these commands:
    npm init -y
    npm i express nodemon
    (optional) -> go into package.json and add "type": "module" to enable import from 
*/

// [Please enable only ONE of these]
import express from "express"; // if you are using type: module
import logger from "./logger.js";
import auth from "./auth.js";
//const express = require("express"); // if using common JS (Default)

const app = express();
const PORT = process.env.PORT || 8090;

// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger); //app wide

// routes
app.get("/profile", auth, (req, res) => {
  res.send("Welcome to your profile page Stan");
});

app.get("/01", (req, res) => {
  res.send("Welcome to our server - 01");
});

app.get("/02", (req, res) => {
  res.send("Welcome to our server -02");
});

// app.get("/03", (req, res) => {
//   logger();
//   res.send("Welcome to our server");
// });

// app.get("/04", (req, res) => {
//   logger();
//   res.send("Welcome to our server");
// });

// app.method("/endpoint", (req, res) => {
//     res.send("Welcome to our server");
//   });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
