module.exports = app => {
    require('dotenv').config();
    const del = require(`../controllers/${process.env.CONTROLLER}/delete.js`);

    var router = require("express").Router();

    router.delete("/job/:jobId", del.deleteJobByID);

    router.delete("/company/:companyId", del.deleteCompanyByID);

    app.use('/delete',router);
}
