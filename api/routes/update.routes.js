module.exports = app => {

    const update = require("../controllers/update.js");

    var router = require("express").Router();

    router.put("/job", update.updateJob);

    router.put("/company", update.updateCompany);

    app.use('/update',router);
}
