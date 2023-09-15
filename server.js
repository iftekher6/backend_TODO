import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

const PORT = 4000;
app.listen(process.env.PORT, () => {
  console.log(`server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});