const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
 
  try {
    const token = req.header("x-auth-token");

    // checks for token
    if (!token) {
      return res
        .status(401)
        .json({ msg: "No authenentication token, authorization denied" });
    }
    // verifies token
    const verified = jwt.verify(token, process.env.JWT_PASSWORD);
    if (!verified) {
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied" });
    }
    // req.user = verified
    req.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
