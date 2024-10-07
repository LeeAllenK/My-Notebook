
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING)

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch(err) {
    process.exit(1)
    return err;
  }
}
module.exports = connectDB;
