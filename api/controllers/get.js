const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.companyList = async (req, res) => {
    const companies = await db.companies.findMany({select: {id: true, company_name: true}})
    res.json(companies)
};

exports.jobList = async (req, res) => {
    const jobs = await db.jobs.findMany({select: {id: true, jobposition : true}})
    res.json(jobs)
};

exports.getCompanyByID = async (req, res) => {
    res.json({message:"ขอข้อมูลบริษัท"})
};

exports.getJobByID = async (req, res) => {
    res.json({message:"ขอข้อมูลงานจาก ID"})
};

exports.searchByPosition = async (req, res) => {
    res.json({message:"ขอรายชื่องานจาก keyword ตำแหน่งงานนี้"})
};

exports.searchByEducation = async (req, res) => {
    res.json({message:"ขอรายชื่องานที่ใช้วุฒิการศึกษานี้"})
};