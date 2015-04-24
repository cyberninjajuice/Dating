var express = require("express"),
  ejs = require("ejs"),
  sqlite3 = require("sqlite3").verbose(),
  db = new sqlite3.Database("./db/dating.db"),
  app = express(),
  port = 3000,
  bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json({
  extended: false
}));

app.get("/", function(req, res) {
  res.redirect("/new/date");
});

app.get("/new/date", function(req, res) {
  res.render("index.ejs");
});

app.post("/dates", function(req, res) {
  JSON.parse(req.body.fullInfo);
  db.run("INSERT INTO dates (name, address, password, phone, pic, seed) VALUES (?, ?, ?, ?, ?, ?)", fullInfo.name, fullInfo.address, fullInfo.password, fullInfo.phone, fullInfo.pic, fullInfo.seed, function(err) {
    if (err) console.log(err);
  });
  db.all("SELECT * FROM dates", function(err, allDates) {
    res.render("alldates.ejs", {
      dates: allDates
    });
  })
});

app.listen(port, function() {
  console.log("Now humming on PORT: " + port);
});