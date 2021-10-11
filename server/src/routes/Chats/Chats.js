const router = require("express").Router();

router.get("/", async function (req, res, next) {
    try{
        res.status(200).send("WHATABYTE: Food For Devs");
    }
    catch(err){
        console.log(err.message)
    }
})

//router.post("/", async function (req, res, next) {
//});


module.exports = router;