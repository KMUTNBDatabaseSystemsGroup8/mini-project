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
            error: "Bad Request Or at least company_name,location,email and telephone are required. ",
            message: error
        });
    }
};

exports.createJob = async (req, res) => {
    try{
        const job = await db.jobs.create({
             data: req.body,
            })
        const company = await db.companies.findUniqueOrThrow({ where: { id: job.company_id } })
        res.json(job)
    } catch(error) {
        res.status(400);
        res.json({
            error: "Bad Request Or at least jobposition,availablecount,jobrequirement and company_id are required. ",
            message: error
        });
    }
};