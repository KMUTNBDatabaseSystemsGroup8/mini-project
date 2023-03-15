const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.deleteJobByID = async (req, res) => {
    try{
        const job_id = req.params.jobId;
        const job = await db.jobs.delete({ where: { id: job_id }})
        res.json(job)
    } catch(error) {
        res.status(444);
        res.json({
            error: "Data not found",
            message: error
        });
    }
};

exports.deleteCompanyByID = async (req, res) => {
    try{
        const company_id = req.params.companyId;
        const company = await db.companies.delete({ where: { id: company_id }})
        res.json(company)
    } catch(error) {
        res.status(444);
        res.json({
            error: "Data not found",
            message: error
        });
    }
};