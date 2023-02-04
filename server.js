const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

// coonect to DB
connectDB();

// Route Files
const bootcamps = require("./routes/bootcamps");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 6000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  )
);
