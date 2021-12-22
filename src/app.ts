import "reflect-metadata";
import Express from "express";
import {createConnection} from "typeorm";
import PlayerRoutes from "./routes/player";
import ScoreRoutes from "./routes/score";
import WeekRoutes from "./routes/Week";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
const app = Express();
app.use(Express.json());
app.use(cors())

const port = process.env.PORT || 5000;

createConnection().then(async (connection) => {
  app.listen(port,() => console.log("server is up and running"))

  //Player Routes
  app.use(PlayerRoutes,ScoreRoutes,WeekRoutes );
  })
