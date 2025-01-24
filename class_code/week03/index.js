//const express = require("express");

import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome to the server - GET");
});

app.post("/", (req, res) => {
  res.send("Welcome to the server - POST");
});

app.put("/", (req, res) => {
  res.send("Welcome to the server - PUT");
});

app.delete("/", (req, res) => {
  res.send("Welcome to the server - DELETE");
});

//https://www.youtube.com/watch?v=1BVJzaXv3rk

app.get("/watch", (req, res) => {
  console.log("URL -Call");
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  console.log(req.query);
  console.log(req.params);
  res.send("Welcome to the watchlist");
  console.log(req.body);
});

app.get("/itm/:itemID", (req, res) => {
  console.log("Query call:");
  console.log(req.query);
  console.log("Param call:");
  console.log(req.params);
  res.send("Welcome to the watchlist");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
