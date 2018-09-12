const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose");

app.use(express.static(__dirname + '/public'));
mongoose.connect("mongodb://localhost:27017/TODO");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//SCHEMA SETUP
const todoSchema = new mongoose.Schema({
  body: String
});

const Todo = mongoose.model("Todo", todoSchema);

app.post("/todo", function(req, res){
  //get data from form
  var textBody = req.body.textBody;
  var newTodo = {body: textBody};
  //add newTodo to the database
  Todo.create(newTodo, function(err, newTodo){
    if(err){
      console.log("Error was found");
      console.log(err);
      res.reditect("/error");
    } else {
      res.redirect("/");
    }
  });
})
// TODO: Add remove function from database
app.get("/", function(req, res){
  Todo.find({}, function(err, allTodos){
    if(err){
      console.log("Error was found");
      console.log(err);
      res.reditect("/error")
    } else{
      res.render("index", {todos: allTodos});
    }
  });
});
app.get("/error", function(req, res) {
  res.render("error.html");
})
app.listen(3000, function(){
  console.log("Server is up and running.");
})
