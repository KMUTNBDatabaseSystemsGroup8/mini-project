module.exports = app => {
    const get = require("../controllers/get.js");
    const create = require("../controllers/create.js");
    const update = require("../controllers/update.js");
    const del = require("../controllers/delete.js");

    var router = require("express").Router();

    router.get("/get/companies", get.companyList);

    router.get("/get/jobs", get.jobList);

    router.get("/get/company/:companyId", get.getCompanyByID);

    router.get("/get/job/:jobId", get.getJobByID);

    router.get("/get/jobs/position/:position", get.searchByPosition);

    router.get("/get/jobs/education/:education", get.searchByEducation);

    router.post("/new/company", create.createCompany);
    
    router.post("/new/job", create.createJob);

    router.put("/update/job", update.updateJob);

    router.put("/update/company", update.updateCompany);

    router.delete("/delete/job", del.deleteJob);

    router.delete("/delete/company", del.deleteCompany);

    app.use('/',router);
}
