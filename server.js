const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const reviewRoute = require('./routes/reviewRoute')

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/review", reviewRoute);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});