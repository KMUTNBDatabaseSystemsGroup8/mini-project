module.exports = app => {

    const del = require("../controllers/delete.js");

    var router = require("express").Router();

    router.delete("/job/:jobId", del.deleteJobByID);

    router.delete("/company/:companyId", del.deleteCompanyByID);

    app.use('/delete',router);
}
