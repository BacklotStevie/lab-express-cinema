const express = require("express");
const router = express.Router();

const Movies = require("../model/Movies.js");
const cors = require("cors")

// router.use(cors)

/* GET home page */
router.get("/movies", (req, res) => {
  console.log("finding")
  Movies.find({})
    .then((movies) => {
      console.log("called");
      res.status(200).json(movies);
    })
    .catch((err) => {
      res.status(500).json({ message: "error" })
    })
});

module.exports = router;
