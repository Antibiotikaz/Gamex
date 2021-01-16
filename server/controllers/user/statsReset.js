const { User } = require("../../models/userModel");

exports.statsReset = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

   

    let updatedHealth;
    if (user.health <= 0) {
      updatedHealth = user.fullHealth;
    }

    await user.updateOne({ health: updatedHealth });

    return res.json({
      id: user._id,
      email: user.email,
      role: user.role,
      level: user.level,
      experience: user.experience,
      gold: user.gold,
      stamina: user.stamina,
      health: user.health,
    });
  } catch (err) {
    return res.json(err.message);
  }
};