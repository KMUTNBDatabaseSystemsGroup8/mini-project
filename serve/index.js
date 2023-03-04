const expressJS = require('express');
const router = expressJS.Router();
const path = require("path");

router.use(expressJS.static(path.join(__dirname, "..", "build")));
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

module.exports = router;