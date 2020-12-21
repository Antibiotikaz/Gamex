const { User } = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    // checks for empty fields
    if (!email || !password) {
      return res.status(400).json({ msg: "Enter all fields" });
    }
    // checks for email
    email = email.toLowerCase();

    const user = await User.findOne({ email });
    if (!user || user === null) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // checks password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_PASSWORD, {
      expiresIn: "8h",
      // expiresIn: '10s',
    });
    res.json({
      token,
      msg: "Login successful!",
      id: user._id,
      email: user.email,
      role: user.role,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
