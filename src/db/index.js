import mongoose from "mongoose";

const { DB_URL } = process.env;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

async function connectDB() {
  if (!DB_URL) {
    throw { message: "> DB_URL undefined" };
  }

  return mongoose.connect(
    DB_URL,
    options
  );
}

connectDB()
  .then(() => console.log("> DB connected"))
  .catch(e => console.log(e.message));
