const {analyzeCode} = require('../services/aiService')

module.exports.reviewCode = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const review = await analyzeCode(code);

    res.json({
      success: true,
      review
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};