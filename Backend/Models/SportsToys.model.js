const mongoose = require("mongoose");

const SportsToysSchema = mongoose.Schema({
  image: String,
  title: String,
  price: Number,
  userID: String,
},{
  versionKey:false
});

const SportsToysModel = mongoose.model("SportsToys", SportsToysSchema);

module.exports = { SportsToysModel };

// ₹








