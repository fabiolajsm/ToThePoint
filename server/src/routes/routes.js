const Router = require("express");
const router = Router();
const ChatsRoute = require("./Chats/Chats");

router.use("/", ChatsRoute);

module.exports = router;