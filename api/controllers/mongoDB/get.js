const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.companyList = async (req, res) => {
    try {
        const companies = await db.companies.findMany({ select: { id: true, company_name: true } })
        res.json(companies)
    } catch (error) {
        res.status(400);
        res.json({
            error: "Bad Request",
            message: error 
        });
    }
};

exports.jobList = async (req, res) => {
    try {
        const jobs = await db.jobs.findMany({ select: { id: true, jobposition: true } })
        res.json(jobs)
    } catch (error) {
        res.status(400);
        res.json({
            error: "Bad Request" ,
            message: error 
        });
    }
};

exports.getCompanyByID = async (req, res) => {
    try {
        const company_id = req.params.companyId;
        const company = await db.companies.findUniqueOrThrow({ where: { id: company_id}})
        res.json(company)
    } catch (error) {
        res.status(444);
        res.json({
            error: "Data not found",
            message: error
        });
    }
};

exports.getJobByID = async (req, res) => {
    try {
        const job_id = req.params.jobId;
        const job = await db.jobs.findUniqueOrThrow({ where: {id: job_id}})
        res.json(job)
    } catch (error) {
        res.status(444);
        res.json({
            error: "Data not found",
            message: error
        });
    }
};

exports.searchByPosition = async (req, res) => {
    try {
        const job_positions = req.params.position;
        const job = await db.jobs.findMany({ where: { jobposition: { contains: job_positions, mode: "insensitive" } }, select: { id: true, jobposition : true } })
        res.json(job)
    } catch (error) {
        res.status(444);
        res.json({
            error: "Data not found",
            message: error
        });
    }
};

exports.searchByEducation = async (req, res) => {
    try {
        const educations = req.params.education;
        const job = await db.jobs.findMany({ where: { education: { contains: educations, mode: "insensitive" } } })
        res.json(job)
    } catch (error) {
        res.status(444);
        res.json({
            error: "Data not found",
            message: error
        });
    }
};