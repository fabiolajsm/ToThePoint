const Router = require("express");
const router = Router();
// const TasksRoute = require("./tasks/tasks");


router.get("/", (_req, res) => {
  res.send("wipit api");
});
// router.use("/task", TaskRoute);


module.exports = router;