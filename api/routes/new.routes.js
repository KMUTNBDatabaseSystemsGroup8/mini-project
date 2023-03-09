module.exports = app => {
    
    const create = require("../controllers/create.js");

    var router = require("express").Router();

    router.post("/company", create.createCompany);
    
    router.post("/job", create.createJob);

    app.use('/new',router);
}
