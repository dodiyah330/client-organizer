import { connect as _connect } from "mongoose";

const connectDb = async () => {
  try {
    const connect = await _connect(
      "mongodb+srv://ashishgajjar501:ashishgajjar501@cluster0.iozputk.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(
      "Database connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
