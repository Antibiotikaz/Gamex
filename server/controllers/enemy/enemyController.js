const { Enemy } = require("../../models/enemyModel");

exports.enemy = async (req, res) => {
    let enemyID = req.params.enemyID
  
  try {
    const enemy = await Enemy.findById(enemyID);
    if (!enemy) throw Error("No enemies exist");

    res.json({
      id: enemy._id,
      health: enemy.health,
    damage:enemy.damage,
    name:enemy.name
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};
