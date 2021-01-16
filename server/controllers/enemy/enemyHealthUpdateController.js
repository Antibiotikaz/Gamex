const { Enemy } = require("../../models/enemyModel");

exports.updateHealth = async (req, res) => {
  try {
    const enemyID = req.params.enemyID;
    const enemy = await Enemy.findById(enemyID);

    let { enemyHealth, damage } = req.body;

    if (!enemyHealth || !damage) {
      return res.status(400).json({ msg: "There no battle data" });
    }

    let updatedHealth;
   
    if (enemy.health <= 0) {
      updatedHealth = enemy.fullHealth;
    } else {
      updatedHealth = enemy.health - damage;
    }
    await enemy.updateOne({ health: updatedHealth });

    return res.json({
      id: enemy._id,
      health: enemy.health,
      damage: enemy.damage,
      name: enemy.name,
    });
  } catch (err) {
    return res.json(err.message);
  }
};
