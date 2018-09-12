const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose");

//basic setup
app.use(express.static(__dirname + '/public'));
mongoose.connect("mongodb://localhost:27017/TODO");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//SCHEMA SETUP
const todoSchema = new mongoose.Schema({
  body: String
});

const Todo = mongoose.model("Todo", todoSchema);

//Adding new TODO to the database and redirecting to the home page
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
//Deletes TODO by it's textBody given as parameter in DELETE request
app.delete("/remove", function(req, res){
  Todo.deleteOne({body: req.body.textBody}, function(err){
    if(err){
      console.log("Something went wrong");
      console.log(err);
      res.redirect("/error");
    } else{
      res.redirect("/");
    }
  });
});
//Renders whole list of TODOs from the database
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
//Basic error handling
app.get("/error", function(req, res) {
  res.render("error.html");
})
app.listen(3000, function(){
  console.log("Server is up and running.");
})
