const router = require("express").Router();
const authRoute = require("./auth");
const userRoute = require("./user");

router.use("/api/auth", authRoute);
router.use("/api/users", userRoute);

module.exports = router;