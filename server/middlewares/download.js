const express = require('express');
const router = express.Router();

// middleware to use for all requests
router.use((req, res, next) => {
  next();
});

// GET http://localhost:8080/api
router.get('/', (req, res) => {
  const file = 'app/file/CV.pdf';

  res.setHeader('Content-disposition', 'attachment; filename=CV.pdf');
  res.setHeader("Content-type", 'application/pdf');
  res.download(file);
});

module.exports = router;
