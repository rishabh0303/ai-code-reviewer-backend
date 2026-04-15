const express = require('express')
const {reviewCode} = require('../controllers/reviewController')

const router = express.Router();

router.post("/", reviewCode);

module.exports = router;