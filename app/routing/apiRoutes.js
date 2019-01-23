//4. Your `apiRoutes.js` file should contain two routes:

//* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var bestMatch = require('../data/friends');

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(bestMatch);
  });

  app.post("/api/friends", function (req, res) {
 
    console.log(req.body.scores);

    //we recieve info from the scores
    var userScores = req.body.scores;
    
    var highestScore = 0;
    var highestIndex = 0;
    for (var i = 0; i < bestMatch.length; i++) {
      var currentMatch = bestMatch[i];
      var results = userScores.map((currentItem, index) => {
        return Math.abs(currentItem - currentMatch.scores[index]);
      });
      //get the difference
      let matchScore = results.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      //compare the results
      if(matchScore > highestScore) {
        highestScore = matchScore;
        highestIndex = i;
      }
    }

    var bestFriend = bestMatch[highestIndex];

    res.json(bestFriend);
  });
}
