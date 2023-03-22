module.exports = app => {

    var router = require("express").Router();

    require("./get.routes.js")(app);
    require("./new.routes.js")(app);
    require("./update.routes.js")(app);
    require("./delete.routes.js")(app);

    router.get("/", (req, res) => {
        res.json({
            message: "Ready for request!"
        });
    });
    
    app.use('/',router);
}
