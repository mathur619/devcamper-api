const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Show all Bootcamps yooo",
  });
});

router.get("/:id", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Show Bootcamp: ${req.params.id}`,
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Create Bootcamp: ${req.params.id}`,
  });
});

router.put("/:id", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Update Bootcamp: ${req.params.id}`,
  });
});

router.delete("/:id", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Delete Bootcamp: ${req.params.id}`,
  });
});

module.exports = router;
