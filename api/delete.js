const expressJS = require('express');
const router = expressJS.Router();

router.delete("/job",(req,res)=>{
    res.json({message:"ลบงาน"})
})

router.delete("/delete/company",(req,res)=>{
    res.json({message:"ลบบริษัท"})
})

module.exports = router;