var path = require("path");
var friends = require("../data/friend");

module.exports = function(app) {

    app.get("/api/friend", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friend", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        var totalDifference = 0;

        for (var i=0; i< friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            for (var j=0; j< friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friends.push(userData);

        res.json(bestMatch);
    })
}





/*var friends = require("../data/friend.js");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

  app.get("/api/friend/", function(req, res) {
    res.json(friends);
  });

  


  app.post("/api/friend/", function(req, res) {


    // Object that defines userMatch and its initial values
    var friendMatch = {
      name: "",
      photo: "",
      difference: 50,
      scores: ""
  };
  
  
  var userData = req.body;
  console.log(userData);

  
  var userScores = friend.scores;



    // Loop through the length of the friendsData JSON
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name)
      // Initial difference is 0
      var difference = 0;

      // Loop throug the length of the userScores
      for (var j = 0; j < userScores.length; j++) {
          // Adds the absolute value of userScores at specific index minus the friendsData score at the same index TO the difference variable
          difference += Math.abs(userScores[j] - friend[i].scores[j]);

          // If difference is less than or equal to the Match's difference (100) then change value of userMatch properties
          if (difference <= friendMatch.difference) {
              userMatch.name = friendArray[i].name;
              userMatch.photo = friendArray[i].photo;
              userMatch.difference = difference;
              userMatch.scores = friendArray[i].scores;
          };
       
      };
  };


      console.log(friendMatch);
      friends.push(userData);
      res.json(UserMatch);
    
    
  });

  
};*/