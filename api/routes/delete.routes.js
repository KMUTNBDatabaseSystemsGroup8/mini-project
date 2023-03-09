module.exports = app => {

    const del = require("../controllers/delete.js");

    var router = require("express").Router();

    router.delete("/job", del.deleteJob);

    router.delete("/company", del.deleteCompany);

    app.use('/delete',router);
}
