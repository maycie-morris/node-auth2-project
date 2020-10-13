const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../api/config')

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        // token is invalid
        res.status(401).json({ Hello: 'Sorry but you cant come here' })
      } else {
        // token is valid
        req.jwt = decodedToken
      }
    })

    next();
  } else {
    res.status(401).json({ Message: 'You shall not pass!'})
  }

};
