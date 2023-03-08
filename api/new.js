const expressJS = require('express');
const router = expressJS.Router();

router.post("/company",(req,res)=>{
    res.json({message:"สร้างบริษัท"})
})

router.post("/job",(req,res)=>{
    res.json({message:"สร้างงานใหม่"})
})


module.exports = router;