// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps api/all
  app.get("/api/all", (req, res) => {

    connection.query("SELECT * FROM chirps", (err, data) => {

      if (err) throw err; 

      res.json(data); 
      
    }); 
  }); 
  //read chirps from database
  //respond to client with data 


  // Add a chirp api/new
  app.post("/api/new", (req, res) => { 
    
    connection.query(`INSERT INTO chirps SET ?`, req.body, (err, data) => {

      if(err) throw err; 

      res.json(data.insertedId); 

    })

  })
  // post chirp to db
  // send confirmaton to client 

};
