var friends = require('../data/friends.js')

module.exports = (app) => {
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  })

  app.post('/api/friends', (req, res) => {
    console.log(req.body);
    
    let bestMatch = {
      name: "",
      picture: "",
      friendScore: 1000
    }

    const userData = req.body;
    const userScore = userData.scores;

    var scoreDifference = 0;

    for (let i = 0; i < friends.length; i++) {
      scoreDifference = 0;
      console.log(`friend ${i}`)
      // for (let y = 0; y < friends[i].scores.length; y++){
      //   console.log(`friend score ${y}`)
      //   scoreDifference += Math.abs(parseInt(friends[i].score[y]) - parseInt(userScore[y]));
      // }
      console.log(scoreDifference)
    }
    res.json(bestMatch);  
  })
};