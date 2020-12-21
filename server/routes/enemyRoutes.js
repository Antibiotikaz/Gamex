const router = require("express").Router();

const {enemy} = require("../controllers/enemy/enemyController");
const {updateHealth} = require("../controllers/enemy/enemyHealthUpdateController");



router.get("/spawn/:enemyID",enemy);

router.put("/update/health/:enemyID",updateHealth);

module.exports = router;
