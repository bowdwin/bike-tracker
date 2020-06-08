const express = require("express");
const app = express();

const PORT = 8080;

const apiRoutes = require("./routes/app");
const htmlRoutes = require("./routes/htmlRoutes");
//need to pull routes in sets the prefix for all the routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

//install node mon not working perm
// npm install -g nodemon
// node server.js

// nodemon.js
