const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.TOKEN);
      const role = decodedToken.role;
      if (role !== "ROLE_ADMIN") {
        res.status(403).json({
          error: new Error('Unauthorized')
        });
      } else {
        next();
      }
    } catch {
      res.status(400).json({
        error: new Error('Invalid request!')
      });
    }
  };