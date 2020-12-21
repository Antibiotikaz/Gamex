const { User } = require("../../models/userModel");

exports.indexRoute = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) throw Error("No users exist");

    res.json({
      id: user._id,
      email: user.email,
      role: user.role,
      level: user.level,
      experience: user.experience,
      gold: user.gold,
      stamina: user.stamina,
      health: user.health
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};
