import "reflect-metadata";
import Express from "express";
import {createConnection} from "typeorm";
import PlayerRoutes from "./routes/player";
import ScoreRoutes from "./routes/score";
import cors from "cors";
import "dotenv/config";

const app = Express();
app.use(Express.json());
app.use(cors())

createConnection().then(async (connection) => {
  app.listen('5000',() => console.log("server is up and running"))

  //Player Routes
  app.use(PlayerRoutes,ScoreRoutes);
  })
