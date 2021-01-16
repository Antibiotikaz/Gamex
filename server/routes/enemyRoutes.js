const router = require("express").Router();

const {enemy} = require("../controllers/enemy/enemyController");
const {updateHealth} = require("../controllers/enemy/enemyHealthUpdateController");
const {healthAfterHit} = require("../controllers/enemy/enemyStatsAfterAttack");



router.get("/spawn/:enemyID",enemy);

router.put("/update/health/:enemyID",updateHealth);
router.put("/updateAfterHit/health/:enemyID",healthAfterHit);

module.exports = router;
