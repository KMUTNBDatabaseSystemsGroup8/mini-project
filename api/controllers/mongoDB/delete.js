const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.deleteJobByID = async (req, res) => {
    try{
        const job_id = req.params.jobId;
        const job = await db.jobs.delete({ where: { id: parseInt(job_id) }})
        res.json(job)
    } catch(error) {
        res.status(444);
        res.json({
            error: true,
            message: "Data not found"
        });
    }
};

exports.deleteCompanyByID = async (req, res) => {
    try{
        const company_id = req.params.companyId;
        const company = await db.companies.delete({ where: { id: parseInt(company_id) }})
        res.json(company)
    } catch(error) {
        res.status(444);
        res.json({
            error: true,
            message: "Data not found"
        });
    }
};