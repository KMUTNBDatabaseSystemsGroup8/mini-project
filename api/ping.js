const expressJS = require('express');
const router = expressJS.Router();

router.get("/",(req,res)=>{
    res.json({message:"pong!"})
})

module.exports = router;