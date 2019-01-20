//4. Your `apiRoutes.js` file should contain two routes:

//* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var bestMatch = require('../data/friends');

module.exports = function (app) {
  app.post("/api/friends", function (req, res) {
    //console log req the first time it works

    //separate out object properties from req
    console.log(req.body);
    var userScores = req.body.scores;
    /*
    var friendSeekerName = req.body.name;
    var friendSeekerPicture = req.body.pic;
    var friendSeekerScores = req.body.scores;

    //for loop to iterate through thirdProperty;
    //for (var i = 0; i < scores.length; i += 1) {
     //   var totalDifference = scores[i];
   // }*/
    //tengo que hacer un for loop entre todos mis arrays para ver cual es el mas parecido
    var highestScore = 0;
    var highestIndex = 0;
    for (var i = 0; i < bestMatch.length; i++) {
      var currentMatch = bestMatch[i];
      var results = userScores.map((currentItem, index) => {
        return Math.abs(currentItem - currentMatch.scores[index]);
      });

      let matchScore = results.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

      if(matchScore > highestScore) {
        highestScore = matchScore;
        highestIndex = i;
      }
    }

    bestFriend = bestMatch[highestIndex];

    res.json(bestFriend);
  });
}
  //friend seeker comes to page and selects 10 numbers
  // As a friend seeker, I want to be able to select qualities in a friend.


  //user submits selections


  //program captures these selections


  //program sends data to backend/via server


  //program compares selections against 10 hard coded "friends"


  //program presents closest match