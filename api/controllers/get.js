exports.companyList = (req, res) => {
    res.json({message:"ขอรายชื่อบริษัท"})
};

exports.jobList = (req, res) => {
    res.json({message:"ขอรายชื่องานทั้งหมด"})
};

exports.getCompanyByID = (req, res) => {
    res.json({message:"ขอข้อมูลบริษัท"})
};

exports.getJobByID = (req, res) => {
    res.json({message:"ขอข้อมูลงานจาก ID"})
};

exports.searchByPosition = (req, res) => {
    res.json({message:"ขอรายชื่องานจาก keyword ตำแหน่งงานนี้"})
};

exports.searchByEducation = (req, res) => {
    res.json({message:"ขอรายชื่องานที่ใช้วุฒิการศึกษานี้"})
};