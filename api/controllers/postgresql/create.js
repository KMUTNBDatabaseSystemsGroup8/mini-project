const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.createCompany = async (req, res) => {
    try{
        const company = await db.companies.create({
             data: req.body,
            })
        res.json(company)
    } catch(error) {
        res.status(400);
        res.json({
            error: true,
            message: "Bad Request Or at least company_name,location,email and telephone are required. "
        });
    }
};

exports.createJob = async (req, res) => {
    
    try{
        var bodyrequest = req.body;
        const company = await db.companies.findUniqueOrThrow({ where: { id: parseInt(req.body.company_id) } });
        bodyrequest.company_id = company.id;
        const job = await db.jobs.create({
             data: bodyrequest,
            })
        res.json(job)
    } catch(error) {
        res.status(400);
        res.json({
            error: true,
            message: "Bad Request Or at least jobposition,availablecount,jobrequirement and company_id are required. "
        });
    }
};