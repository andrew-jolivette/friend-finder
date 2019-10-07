var friends = require('../data/friends.js')

module.exports = (app) => {
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  })

  app.post('/api/friends', (req, res) => {
    console.log(req.body);

    let bestMatch = {
      name: "",
      photo: "",
      friendScore: 1000
    }

    const userData = req.body;
    const userScore = userData.scores;

    var scoreDifference = 0;

    for (let i = 0; i < friends.length; i++) {
      scoreDifference = 0;
      // console.log(`friend ${i}`)

      for (let j = 0; j < friends[i].scores.length; j++){
        // console.log(`friend score ${parseInt(friends[i].scores[j])}`)
        scoreDifference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScore[j])); 
      }
      console.log(`score difference ${scoreDifference}`)
      if (scoreDifference <= bestMatch.friendScore){
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendScore = scoreDifference;
      }
    }
    friends.push(userData);

    res.json(bestMatch);  
  })
};