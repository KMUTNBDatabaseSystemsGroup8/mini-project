const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.updateJob = async (req, res) => {
    res.json({message:"อัปเดทงานใหม่"})
};

exports.updateCompany = async (req, res) => {
    res.json({message:"อัปเดทข้อมูลบริษัท"})
};