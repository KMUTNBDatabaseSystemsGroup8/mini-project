const expressJS = require('express');
const app = expressJS();


require("./routes/main.routes.js")(app);

app.use("/", (req, res) => {
    res.status(403);
    res.json({
        error: true,
        message: "Invalid API Path"
    });
});


module.exports = app;