const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"app/public/home.html"))
});

app.get("/survey",(req,res)=>{
    res.sendFile(path.join(__dirname,"app/public/survey.html"))
});






app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });