const mongoose = require("mongoose");

const useDatabase = async (connectionString) => {
  try {
    const connection = await mongoose.connect(`${connectionString}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.Promise = global.Promise;

    console.log("Database connected");

    return connection;
  } catch (err) {
    console.log("Error when trying to connect to database");
  }
};

const disconnectDatabase = async () => {
  await mongoose.connection.close();
};

module.exports = { useDatabase, disconnectDatabase };