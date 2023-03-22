const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.companyList = async (req, res) => {
    try {
        const companies = await db.companies.findMany({ select: { id: true, company_name: true } })
        res.json(companies)
    } catch (error) {
        res.status(400);
        res.json({
            error: true,
            message: "Bad Request"
        });
    }
};

exports.jobList = async (req, res) => {
    try {
        const jobs = await db.jobs.findMany({ select: { id: true, jobposition: true , company: {select: {id: true, company_name: true}}} })
        res.json(jobs)
    } catch (error) {
        res.status(400);
        res.json({
            error: true,
            message: "Bad Request"
        });
    }
};

exports.getCompanyByID = async (req, res) => {
    try {
        const company_id = req.params.companyId;
        const company = await db.companies.findUniqueOrThrow({ where: { id: parseInt(company_id) } })
        res.json(company)
    } catch (error) {
        res.status(444);
        res.json({
            error: true,
            message: "Data not found"
        });
    }
};

exports.getJobByID = async (req, res) => {
    try {
        const job_id = req.params.jobId;
        const job = await db.jobs.findUniqueOrThrow({ where: {id: parseInt(job_id)}, include: {company: true}})
        res.json(job)
    } catch (error) {
        res.status(444);
        res.json({
            error: true,
            message: "Data not found"
        });
    }
};

exports.searchByPosition = async (req, res) => {
    try {
        const job_positions = req.params.position;
        const job = await db.jobs.findMany({ where: { jobposition: { contains: job_positions, mode: "insensitive" } } , include: {company: true}})
        res.json(job)
    } catch (error) {
        res.status(444);
        res.json({
            error: true,
            message: "Data not found"
        });
    }
};

exports.searchByEducation = async (req, res) => {
    try {
        const educations = req.params.education;
        const job = await db.jobs.findMany({ where: { education: { contains: educations, mode: "insensitive" } } , include: {company: true}})
        res.json(job)
    } catch (error) {
        res.status(444);
        res.json({
            error: true,
            message: "Data not found"
        });
    }
};

exports.search = async (req, res) => {
    try {
        var job_position_param = req.query.position;
        var company_name_param = req.query.company;
        var location_param = req.query.location;
        const job = await db.jobs.findMany({ where: { jobposition: { contains: job_position_param, mode: "insensitive" }, company: { company_name: { contains: company_name_param, mode: "insensitive" }, location: { contains: location_param, mode: "insensitive" }} } , include: {company: true}})
        res.json(job)
    } catch (error) {
        res.status(444);
        res.json({
            error: "Data not found",
            message: error
        });
    }
};