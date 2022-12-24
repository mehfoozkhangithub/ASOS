const mongoose = require("mongoose");

const AutoCareSchema = mongoose.Schema({
  image: String,
  title: String,
  price: Number,
  userID: String,
},{
  versionKey:false
});

const AutoCareModel = mongoose.model("AutoCare", AutoCareSchema);

module.exports = { AutoCareModel };

// ₹



