const { User } = require("../../models/userModel");

exports.attack = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    let { health, enemyDamage } = req.body;

    if (!health || !enemyDamage) {
      return res.status(400).json({ msg: "There no battle data" });
    }

    let updatedHealth = user.health - enemyDamage;
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
