const { User } = require("../../models/userModel");
const validator = require("validator");
const bcrypt = require("bcryptjs");
exports.registerUser = async (req, res) => {
  try {
    let { email, password, passwordCheck, role } = req.body;
    // register validation
    // validates required fields
    if (!email || !password || !passwordCheck) {
      return res.status(400).json({ msg: "Fill all fields" });
    }

    email = email.toLowerCase();

    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "Invalid email adress" });
    }

    // validates password length
    const passwordLength = process.env.PASSWORD_LENGTH;
    if (password.length < passwordLength) {
      return res.status(400).json({
        msg: `Password must contain at least ${passwordLength} characters`,
      });
    }

    // checks both passwords
    if (password != passwordCheck) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

    // checks if email exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
    }
    //password hash with salt
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // creates new user
    let health;
    let stamina;
    let experience = 0;
    let level = 0;
    let gold = 0;
    if (role === "warrior") {
      health = 200;
      stamina = 50;
      fullHealth = 200;
    } else if (role === "rogue") {
      health = 100;
      stamina = 100;
      fullHealth = 100;
    } else {
      health = 90;
      stamina = 200;
      fullHealth = 100;
    }
    const newUser = new User({
      isUserRegistered: true,
      email,
      health,
      stamina,
      level,
      experience,
      gold,
      password: passwordHash,
      role,
      isUserBlocked: false,
    });

    const savedUser = await newUser.save();

    res.json({
      msg: "Registration successful!",
      user: {
        id: savedUser._id,
        email: savedUser.email,
        role: savedUser.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
