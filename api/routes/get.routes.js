module.exports = app => {
    const get = require("../controllers/get.js");
    
    var router = require("express").Router();

    router.get("/companies", get.companyList);

    router.get("/jobs", get.jobList);

    router.get("/company/:companyId", get.getCompanyByID);

    router.get("/job/:jobId", get.getJobByID);

    router.get("/jobs/position/:position", get.searchByPosition);

    router.get("/jobs/education/:education", get.searchByEducation);

    app.use('/get',router);
}
