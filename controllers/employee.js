const mongoose = require("mongoose");
const Employee = require("../models/employee");

module.exports.add = function (req, res, next) {
  let employee = new Employee({
    name: req.body.name,
    role: req.body.role,
    phone: req.body.phone,
    birthday: req.body.birthday,
    isArchive: false,
  });

  employee.save(function (err, doc) {
    if (err)
      return next({
        code: err.code,
        message: err.message,
      });

    if (doc == null || doc.length == 0)
      return next({
        message: "Ничего не нашёл",
      });

    res.status(200);
    res.json(doc);
  });
};

module.exports.update = function (req, res, next) {
  Employee.findById(req.body.id, function (err, employee) {
    if (err)
      return next({
        code: err.code,
        message: err.message,
      });

    if (employee == null || employee.length == 0)
      return next({
        message: "Ничего не нашёл",
      });

    for (let key in employee) {
      if (req.body.hasOwnProperty(key)) {
        employee[key] = req.body[key];
      }
    }

    employee.save(function (err, doc) {
      if (err)
        return next({
          code: err.code,
          message: err.message,
        });

      if (doc == null || doc.length == 0)
        return next({
          message: "Ничего не нашёл",
        });

      res.status(200);
      res.json(doc);
    });
  });
};

module.exports.getEvery = function (req, res, next) {
  Employee.find({}, function (err, employees) {
    if (err)
      return next({
        code: err.code,
        message: err.message,
      });

    if (employees == null || employees.length == 0)
      return next({
        message: "Ничего не нашёл",
      });
    res.status(200);
    res.json(employees);
  });
}

module.exports.filterByRole = function (req, res, next) {
  Employee.find({ role: req.body.role }, function (err, employees) {
    if (err)
      return next({
        code: err.code,
        message: err.message,
      });

    if (employees == null || employees.length == 0)
      return next({
        message: "Ничего не нашёл",
      });
    res.status(200);
    res.json(employees);
  });
};

module.exports.filterByArchive = function (req, res, next) {
  Employee.find({ isArchive: req.body.isArchive }, function (err, employees) {
    if (err)
      return next({
        code: err.code,
        message: err.message,
      });

    if (employees == null || employees.length == 0)
      return next({
        message: "Ничего не нашёл",
      });

    res.status(200);
    res.json(employees);
  });
};