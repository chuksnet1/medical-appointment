///"start": "npm run build && node dist/index.js",
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "process";
import userRouter from "./router/userRouter";
import dashboardRouter from "./router/dashboardRoute";
import appointmentRoute from "./router/appointmentRoute";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/dashboard", dashboardRouter);

app.use("/user", userRouter);
app.use("/appointment", appointmentRoute);

const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => console.log("server listening at port 5000 or ", port));

console.log("we are in server");
