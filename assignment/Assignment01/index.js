//const express = require("express");
import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/fetch", (req, res) => {
  res.send("Fetch your data");
});
app.get("/save", (req, res) => {
  res.send("Your information has been saved");
});

app.get("/delete", (req, res) => {
  res.send("Information is deleted");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
