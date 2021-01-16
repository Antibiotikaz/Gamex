const router = require("express").Router();
const { registerUser } = require("../controllers/auth/registerUserController");
const { login } = require("../controllers/auth/loginUserController");
const { indexRoute } = require("../controllers/auth/indexRoute");
const auth = require("../controllers/middleware/auth");
const { attack } = require("../controllers/user/userAttack");
const {
  userDataAfterAttack,
} = require("../controllers/user/userDataAfterAttack");
const {
  wonBattle,
} = require("../controllers/user/wonBattle");
const {
  statsReset,
} = require("../controllers/user/statsReset");

router.post("/register", registerUser);

router.post("/login", login);

router.get("/", auth, indexRoute);

router.put("/attack/:userId", attack);
router.get("/attack/:userId", userDataAfterAttack);
router.put("/won/:userId", wonBattle);
router.put("/statsReset/:userId", statsReset);
module.exports = router;
