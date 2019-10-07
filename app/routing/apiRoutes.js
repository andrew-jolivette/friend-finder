var friends = require('../data/friends.js')

module.exports = (app) => {
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  })

  app.post('/app/friends', (req, res) => {
    console.log(req.body);
  })
};