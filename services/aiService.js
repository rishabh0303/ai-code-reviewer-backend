const { GoogleGenerativeAI } = require("@google/generative-ai")
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports.analyzeCode = async (code) => {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

    const prompt = `
You are a senior software engineer.

Analyze the following code and provide:

1. Bugs
2. Performance improvements
3. Security issues
4. Clean code suggestions
5. Refactored version (if needed)

Respond in markdown format.

Code:
${code}
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    return response.text();
};

