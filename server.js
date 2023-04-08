const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const colors = require("colors");

dotenv.config({ path: "./config/config.env" });

// coonect to DB
connectDB();

// Route Files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Body Parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 6000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
      .yellow.bold
  )
);

// Hanlde unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // close server and exit process
  server.close(() => process.exit(1));
});
