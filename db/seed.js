var sqlite3= require("sqlite3");
var db= new sqlite3.Database("dating.db");
db.run("INSERT INTO dates (name, address, password, phone, pic, seed) VALUES (?, ?, ?, ?, ?, ?)", "john smith", "123 Portsmith Ave", "hampster13", "2401239009", "http://lorempixel/300/300", "greywolf", function(err){
  if(err) console.log(err)
});
