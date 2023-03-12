const expressJS = require('express');
const router = expressJS.Router();

router.post("/",(req,res)=>{
    const {company,job_postings,location,object} = req.body
    console.log({company,job_postings,location,object})
    res.json({company,job_postings,location,object})
})

module.exports = router;