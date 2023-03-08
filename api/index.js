const expressJS = require('express');
const router = expressJS.Router();

// API Route Import
const getHander = require("./get")
const deleteHander = require("./delete")
const newHander = require("./new")
const updateHander = require("./update")

// API Route Setting
router.use("/get", getHander);
router.use("/delete", deleteHander);
router.use("/new", newHander);
router.use("/update", updateHander);

// API Default Route
router.use("/", (req, res) => {
    res.status(403);
    res.json({
        error: true,
        message: "Invalid API Path"
    });
});

module.exports = router;