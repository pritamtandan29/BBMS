const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/donors", require("./routes/donorRoutes"));
app.use("/api/inventory", require("./routes/inventoryRoutes"));
app.use("/api/requests", require("./routes/requestRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

app.get('/', (req, res) => {
  res.send('🩸 Blood Bank API running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
