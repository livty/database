var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add a cat
//var george = new Cat({
  //  name:"Chuck Norris",
   // age:60,
   // temperament:"Badass"
//});

//george.save(function(err, cat){
 //   if(err){
  //      console.log("No");
   // }else{
    //    console.log("done");
  //      console.log(cat);
  //  }
//});
Cat.create({
    name:"Abraham Lincoln",
    age:51,
    temperament:"Presidential"
},function(err,cat){
    if(err){
        console.log(err);
    }else{
        console.log(cat);
    }
    
});

//retrieve a cat
Cat.find({}, function(err,cats){
    if(err){
        console.log("Noo");
        console.log(err);
    }else{
        console.log("All");
        console.log(cats);
    }
   
});

