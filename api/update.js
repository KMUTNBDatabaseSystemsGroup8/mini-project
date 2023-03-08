const expressJS = require('express');
const router = expressJS.Router();

router.put("/update/่job",(req,res)=>{
    res.json({message:"อัปเดทงานใหม่"})
})

router.put("/update/company",(req,res)=>{
    res.json({message:"อัปเดทข้อมูลบริษัท"})
})

module.exports = router;