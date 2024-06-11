import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connectd", () => {
      console.log("Mongodb Connectd");
    });
    connection.on("error", (err) => {
      console.log(
        "mongodb connnection error, please make sure a DB is up and runing:" +
          err
      );
      process.exit();
    });
  } catch (error) {
    console.log("somthing went wrong in connecting to DB");
    console.log(error);
  }
}
