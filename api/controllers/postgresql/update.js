const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.updateJob = async (req, res) => {
    try{
        const job_id = req.body.id;
        const job = await db.jobs.update({
             where: { id: parseInt(job_id) },
             data: {
                jobposition : req.body.jobposition,
			    education : req.body.education,
			    toeic : parseInt(req.body.toeic),
			    gpax : parseFloat(req.body.gpax),
                availablecount : parseInt(req.body.availablecount),
			    jobrequirement :  req.body.jobrequirement,
			    salary : req.body.salary,
			    company_id : parseInt(req.body.company_id),
             },
            })
        res.json(job)
    } catch(error) {
        res.status(444);
        res.json({
            error: true,
            message: "Bad Request" + req.body
        });
    }
};

exports.updateCompany = async (req, res) => {
    try{
        const company_id = req.body.id;
        const company = await db.companies.update({
             where: { id: parseInt(company_id) },
             data: {
                company_name : req.body.company_name,
			    location : req.body.location,
			    email : req.body.email,
			    marketcap : req.body.marketcap,
                website : req.body.website,
			    telephone :  req.body.telephone,
             },
            })
        res.json(company)
    } catch(error) {
        res.status(444);
        res.json({
            error: true,
            message: "Bad Request"
        });
    }
};