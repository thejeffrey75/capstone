const mongoose = require("mongoose");

const resultsSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  drinkOrSmoke: {
    type: Boolean,
    required: true,
    enum: ["thin", "chicago", "deep-dish", "hella-thick"]
  },
  ailments: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  pretrials: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

});

const Results = mongoose.model('Results', resultsSchema);

module.exports = Results;
