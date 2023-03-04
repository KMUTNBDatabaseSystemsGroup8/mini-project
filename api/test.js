const expressJS = require('express');
const router = expressJS.Router();

router.get("/",(req,res)=>{
    res.json({meow:"meow!"})
})

module.exports = router;