const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://admin:12345678M@cluster0.9exz2.mongodb.net/JoinTheExperiment?retryWrites=true&w=majority",
    // "mongodb://localhost:27017/JoinTheExperiment",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();
module.exports = mongoose;
