const express = require("express");
const connectDB = require("./config/db_config");
const errorHandler = require("./middleWare/errrorHandler");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

// auth Routes
app.use("/api/auth", require("./routes/userRoutes"));

// user /Routes
app.use("/api/task", require("./routes/userTastRoutes"));

// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Start  on ${PORT}`);
});
