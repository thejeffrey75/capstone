const mongoose = require("mongoose");

const resultsSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  vice: [String],

  ailments: [String],

  pretrials: [String],

});

const Results = mongoose.model('Results', resultsSchema);

module.exports = Results;
