const expressJS = require('express');
const router = expressJS.Router();

router.get("/companies",(req,res)=>{
    res.json({message:"ขอรายชื่อบริษัท"})
})

router.get("/jobs",(req,res)=>{
    res.json({message:"ขอรายชื่องานทั้งหมด"})
})

router.get("/company/:companyId",(req,res)=>{
    res.json({message:"ขอข้อมูลบริษัท"})
})

router.get("/job/:jobId",(req,res)=>{
    res.json({message:"ขอข้อมูลงานจาก ID"})
})

router.get("/jobs/position/:position",(req,res)=>{
    res.json({message:"ขอรายชื่องานจาก keyword ตำแหน่งงานนี้"})
})

router.get("/jobs/education/:education",(req,res)=>{
    res.json({message:"ขอรายชื่องานที่ใช้วุฒิการศึกษานี้"})
})

module.exports = router;