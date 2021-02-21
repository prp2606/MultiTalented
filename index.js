const express = require("express");
const multiTalented = express();

const path = require("path");
const { urlencoded } = require("body-parser");

const port = 7500;

multiTalented.use("/static", express.static("staticFilesContainer"));
multiTalented.use(express.urlencoded());

multiTalented.use(express.static(__dirname + "/public"));
var engines = require("consolidate");

// multiTalented.set("views", __dirname + "/views");
multiTalented.set("views", __dirname + "/");
multiTalented.engine("html", engines.mustache);
multiTalented.set("view engine", "html");

multiTalented.get("/MultiTalented/", (req, res) => {
  res.status(200).render("index.html");
});

multiTalented.get("/MultiTalented/expenseTracker", (req, res) => {
  res.status(200).render("expenseTracker.html");
});

multiTalented.get("/MultiTalented/todo", (req, res) => {
  res.status(200).render("toDo.html");
});

multiTalented.get("/MultiTalented/notesTaker", (req, res) => {
  res.status(200).render("notesTaker.html");
});

multiTalented.get("/MultiTalented/calculator", (req, res) => {
  res.status(200).render("calculator.html");
});

multiTalented.get("/MultiTalented/guessGame", (req, res) => {
  res.status(200).render("guessGame.html");
});

multiTalented.get("/MultiTalented/tictactoe", (req, res) => {
  res.status(200).render("tictactoe.html");
});

multiTalented.listen(port, () => {
  console.log(`Multi-talented is perfectly running on port ${port}`);
});
