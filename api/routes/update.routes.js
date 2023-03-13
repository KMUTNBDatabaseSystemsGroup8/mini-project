module.exports = app => {
    require('dotenv').config();
    const update = require(`../controllers/${process.env.CONTROLLER}/update.js`);
    
    var router = require("express").Router();

    router.put("/job", update.updateJob);

    router.put("/company", update.updateCompany);

    app.use('/update',router);
}
