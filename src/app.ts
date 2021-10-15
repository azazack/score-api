import "reflect-metadata";
import Express from "express";
import {createConnection} from "typeorm";
import PlayerRoutes from "./routes/player";

const app = Express();
app.use(Express.json());

createConnection().then(async (connection) => {
  app.listen('5000',() => console.log("serever is up and running"))

  //Player Routes
  app.use(PlayerRoutes);

  })