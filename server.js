require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

const mongoose = require("mongoose");
/*//const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost:27017/googlebooks"
const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost/googlebooks";

mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB error: ${err}`);
  });*/

// configure mongoose and start the server
// =============================================================
// set mongoose to leverage promises
mongoose.Promise = Promise;
mongoose.set('useCreateIndex', true)

//const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/newsArticles";
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI);

// Database configuration with mongoose

//mongoose.connect(dbURI, { useNewUrlParser: true });

const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successfuly.");
    // start the server, listen on port 3000
    app.listen(PORT, function() {
        console.log("App running on port " + PORT);
    });
});

require("./routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});