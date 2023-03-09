const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.deleteJob = async (req, res) => {
    res.json({message:"ลบงาน"})
};

exports.deleteCompany = async (req, res) => {
    res.json({message:"ลบบริษัท"})
};