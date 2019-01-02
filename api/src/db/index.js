import mongoose from "mongoose";

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

const options = {
  user: DB_USERNAME,
  pass: DB_PASSWORD,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

function connectDB() {
  return Promise.resolve(
    mongoose.connect(
      DB_HOST,
      options
    )
  );
}

connectDB()
  .then(() => console.log("> DB connected"))
  .catch(e => console.log(e.message));
