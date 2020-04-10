const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");
// console.log(date());

const app =express();
let items=[];
let workItems=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req, res){
  // res.send("Hello");






  // let day =""
  // let currentDay =today.getDay();
  // if (currentDay==0){
  //   // res.send("<h1> yay! it is the weekend</h1>");
  //   // res.write("<p>Is it not the weekend</p>");
  //   // res.write("<h1> yay! it is the weekend</h1>");
  //   // res.send();
  //   day = "Sunday";
  //
  //   }
  //   else if(currentDay ==1){
  //     day ="Monday";
  //   }
  //   else if(currentDay ==2){
  //     day ="Tuesday";
  //   }
  //   else if(currentDay ==3){
  //     day ="Wednesday";
  //   }
  //   else if(currentDay ==4){
  //     day ="Thursday";
  //   }
  //   else if(currentDay ==5){
  //     day ="Friday";
  //   }
  //   else if(currentDay ==6){
  //     day ="Saturday";
  //   }
  //   else{
  //   // res.send("<h1>Boo, I have to go to work</h1>");
  //   // res.sendFile(__dirname + "/index.html");
  //   day = "Weekday";
  // }
  let day = date.getDate();
  res.render("list", {listTitle: day, newListItems:items});
      // let NewItem =
  app.post("/", function(req, res){
// console.log(req.body);
     let item = req.body.newItem;

     if (req.body.list ==="Work"){
       workItems.push(item);
         res.redirect("/work");
     }
     else{
        items.push(item);
          res.redirect("/");
     }

    // console.log(item);
    // res.render()

  });

});
app.get("/about", function(req, res){
  res.render("about");
});
app.get("/work", function(req, res){
  res.render("list", { listTitle: "Work List", newListItems: workItems});
});
// app.post("/work", function(req, res){
//   let item =req.body.newItem;
//   workItem.push(item);
//   res.redirect("/work");
// })


app.listen(3000, function(){
  console.log("server is running on port : 3000");
});
