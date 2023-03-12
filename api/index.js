const expressJS = require('express');
const router = expressJS.Router();

// API Route Import
const test = require("./test");
const ping = require("./ping");
const add_company = require("./add_company");
const add_jobposting = require("./add_jobposting");

// API Route Setting
router.use("/test",test);
router.use("/ping",ping);
router.use("/add_company",add_company);
router.use("/add_jobposting",add_jobposting);

// API Default Route
router.use("/", (req,res)=>{
    res.status(403);
    res.json({
        error: true,
        message: "Invalid API Path"
    });
});

module.exports = router;