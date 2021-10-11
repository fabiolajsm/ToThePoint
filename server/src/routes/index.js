const Router = require("express");
const router = Router();
const ChatsRoute = require("./Chats/Chats");

router.use("/", TaskRoute);

module.exports = router;