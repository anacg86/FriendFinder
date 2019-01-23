//Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.
// Dependencies
var express = require("express");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

//la info viene codificada 
app.use(express.urlencoded({ extended: true }));
//la info viene en jason 
app.use(express.json());

//conectar las rutas con el servidor
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  