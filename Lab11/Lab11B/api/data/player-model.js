const mongoose = require("mongoose");


const playerScheama = new mongoose.Schema({

  name:String,
  age: Number,
  country: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  }, 
  netWorth: {
    type: String,
    required: true,
  },
   
});

mongoose.model("player",playerScheama,"tenis");