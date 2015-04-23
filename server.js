var express = require("express"),
  ejs = require("ejs"),
  sqlite3 = require("sqlite3").verbose(),
  db = new sqlite3.Database("./db/dating.db");
  app = express(),
  port = 3000,
  bodyParser = require("body-parser")

app.set("view engine", "ejs"), app.use(express.static(__dirname + "public")), app.use(bodyParser.json({
  extended: false
}));

app.get("/", function(req, res){
  res.redirect("/dates");
});

app.get("/dates", function(req, res){
  res.render("index.ejs");
});

app.listen(port,function(){
  console.log("Now humming on PORT: "+port);
});
