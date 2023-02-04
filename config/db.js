const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });

  console.log(`Mongoose connection established: ${conn.connection.host}`);
};

module.exports = connectDB;
