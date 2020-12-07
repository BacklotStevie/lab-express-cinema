const mongoose = require("mongoose");


// Import of the model Recipe from './models/Recipe.model.js'
const Movies = require("./model/Movies.js");
// Import of the data from './data.json'
const data = require("./bin/seeds.js");

const MONGODB_URI = "mongodb://localhost:27017/Films";

// mongoose
//     .connect(MONGODB_URI, {
//         useCreateIndex: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then((self) => {
//         console.log(`Connected to database: "${self.connection.name}"`)
//         return self.connection.dropDatabase();
//     })
//     .then((result) => {
//         return Movies.insertMany(data).then((movies) => {
//             console.log(movies);
//         });
//     })
//     .then((movies) => {
//         console.log("done");
//     })
//     .catch((error) => {
//         console.error("Error connecting to the database", error);
//     });
