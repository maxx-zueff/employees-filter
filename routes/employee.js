const express = require("express");
const router = express.Router();
const employee = require("../controllers/employee");

router.post("/add-employee", employee.add);
router.post("/update-employee", employee.update);
// router.post("/filter-role-employee", employee.filterByRole);
// router.post("/filter-archive-employee", employee.filterByArchive);
router.get("/find-every-employee", employee.getEvery);
router.post("/get-employee", employee.getOne);

module.exports = router;
