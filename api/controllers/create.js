const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.createCompany = async (req, res) => {
    res.json({message:"สร้างบริษัท"})
};

exports.createJob = async (req, res) => {
    res.json({message:"สร้างงานใหม่"})
};