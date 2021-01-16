const { User } = require("../../models/userModel");
const { Enemy } = require("../../models/enemyModel");
exports.wonBattle = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
//I need to get enemy health and exp drop parameters///
    let { enemyID  } = req.body;
    const enemy = await Enemy.findById(enemyID);
    
    // checks for enemy or user ID
    if (!enemyID || !userId ) {
        return res.status(400).json({ msg: "No enemy or user ID is not provided" });
      }
    // check for enemy and user stats
    if (!enemy || ! user) {
      return res.status(400).json({ msg: "No enemy stats from database" });
    }
    //// Here updates heroes exp and rest of drop stats
    let updatedUserExp;
 
    // Gives random exp
    let min = enemy.minExp
    let max = enemy.maxExp

    let gainedExp = Math.random() * (max - min) + min;
    if (enemy.health <= 0) {
    }
    updatedUserExp = user.experience + gainedExp;
    let exp = Math.round(updatedUserExp)
    await user.updateOne({ experience: exp });
    console.log(exp)
    return res.json({
   
       msg:"Very gud"
    
    });
  } catch (err) {
    return res.json(err.message);
  }
};
