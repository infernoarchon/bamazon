var mysql = require("mysql");
var inquirer = require('inquirer');
var dbconfig = require('./config.json');
var Table = require('cli-table3');

var idcheck = []

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: dbconfig.username,

  // Your password
  password: dbconfig.password,
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  listItems()
});

var createtable = function(res) {
    var table = new Table({
        head: ['item_id','product_name','department_name','price','stock_quantity']
      , colWidths: [10,50,20,15,20]
    });
    for (var i = 0; i < res.length; i++) {
        idcheck.push(res[i].item_id)
        table.push([res[i].item_id,res[i].product_name,res[i].department_name,res[i].price,res[i].stock_quantity])
    }
    console.log(table.toString());
}

var start = function() {
inquirer
  .prompt([
    {
    type: "input",
    message: "Please enter the item_id of the product you would like to buy:",
    name: "item_id",
    }
  ])
  .then(function(response) {
    if(idcheck.includes(parseInt(response.item_id))) {
        getquantity()
    } else {
        console.log("Invalid item_id. Please input a different item_id.")
        start()
    }
  });
}


var listItems = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        createtable(res)
        start()
    });
  }


// var post = function() {
// inquirer
//   .prompt([
//     {
//     type: "input",
//     message: "What is the name of your item?",
//     name: "name",
//     },
//     {
//     type: "list",
//     message: "What type of item is it?",
//     name: "type",
//     choices: ["object","animal","person"]
//     },
//     {
//     type: "input",
//     message: "What is the starting bid?",
//     name: "bid",
//     },
//   ])
//   .then(function(inquirerResponse) {
//     addItem(inquirerResponse.name,inquirerResponse.type,inquirerResponse.bid)
//   });
// }

// var bid = function() {
//     generateItems()
// }


// function askBid() {
//     inquirer
//       .prompt([
//         {
//         type: "input",
//         message: "How much would you like to bid?",
//         name: "userbid",
//         }
//       ])
//       .then(function(inquirerResponse) {
//         if(inquirerResponse.userbid > activeBid) {
//             console.log("Success! You are the new highest bidder!")
//             updateBid(inquirerResponse.userbid, activeItem)
//             readItems()
//         } else {
//             console.log("Failed. Please enter a higher amount")
//             listItems()
//         }
//       });
// }

// function generateItems() {
//     connection.query("SELECT * FROM auction", function(err, res) {
//         if (err) throw err;
//         // Log all results of the SELECT statement
//         for(var i= 0; i < res.length;i++) {
//             itemList.push(res[i].name)
//         }
//         listItems()
//       });
// }

// function addItem(a, b, c) {
// console.log("Inserting a new item...\n");
//     var query = connection.query(
//     "INSERT INTO auction SET ?",
//     {
//     name: a,
//     type: b,
//     starting_bid: c,
//     highest_bid: c
//     },
//     function(err, res) {
//     console.log("Item added!");
//     console.log(res)
//     // Call updateProduct AFTER the INSERT completes
//     readItems()
//     }
// );
// console.log(query.sql);
// // logs the actual query being run
// }

// function readItems() {
//     console.log("Selecting all items...\n");
//     connection.query("SELECT * FROM auction", function(err, res) {
//       if (err) throw err;
//       // Log all results of the SELECT statement
//       for(var i= 0; i < res.length;i++) {
//           console.log(res[i].id + ". " + res[i].name + " - " + res[i].type + " - $" + res[i].highest_bid)
//       }
//       connection.end();
//     });
//   }
