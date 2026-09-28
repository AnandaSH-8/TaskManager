import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index";
import connectDB from "./db";

dotenv.config();

const port = 8082;

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);
connectDB();

app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});
