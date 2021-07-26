const mongoose = require("mongoose");

const trophySchema = new mongoose.Schema({
  tournament:String,
  host: String,
  city : String

});
const playerShema = new mongoose.Schema({
  name:{
      type: String,
      required: true
  },
  country:{
      country: String,
  },
  age:{
  type: Number,
  },
  rank: String,
  netWorth:{ 
   type: String
  },
   lastTrophy : [trophySchema]
  });


mongoose.model("players", playerShema, "tenis");

