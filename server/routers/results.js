const {Router} = require("express");
const Results = require("../models/Results");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM


router.post("/", (request, response) => {
  const newResults = new Results(request.body);
  newResults.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.get("/", (request, response) => {
  Results.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});


module.exports = router;
