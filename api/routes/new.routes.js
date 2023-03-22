module.exports = app => {
    require('dotenv').config();
    const create = require(`../controllers/${process.env.CONTROLLER}/create.js`);

    var router = require("express").Router();

    router.post("/company", create.createCompany);
    
    router.post("/job", create.createJob);

    app.use('/new',router);
}
