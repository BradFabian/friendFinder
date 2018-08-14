var friendData = require("../data/friend.js");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

  app.get("/api/friend/", function(req, res) {
    res.json(friendData);
  });

  


  app.post("/api/friend/", function(req, res) {


    // Object that defines userMatch and its initial values
    var friendMatch = {
      name: "",
      photo: "",
      difference: 50,
      scores: ""
  };
  
  
  var friend = req.body;
  console.log(friend);

  
  var userScores = friend.scores;



    // Loop through the length of the friendsData JSON
    for (var i = 0; i < friendArray.length; i++) {

      // Initial difference is 0
      var difference = 0;

      // Loop throug the length of the userScores
      for (var j = 0; j < userScores.length; j++) {
          // Adds the absolute value of userScores at specific index minus the friendsData score at the same index TO the difference variable
          difference += Math.abs(userScores[j] - friendArray[i].scores[j]);

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
      friendData.push(friend);
      res.json(friendMatch);
    
    
  });

  
};