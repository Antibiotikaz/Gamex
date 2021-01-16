const { Enemy } = require("../../models/enemyModel");

exports.healthAfterHit = async (req, res) => {
  try {
    const enemyID = req.params.enemyID;
    const enemy = await Enemy.findById(enemyID);


    let updatedHealth;
   
    if (enemy.health <= 0) {
      updatedHealth = enemy.fullHealth;
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
