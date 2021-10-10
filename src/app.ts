import "reflect-metadata";
import Express, { Request, Response } from "express";
import {createConnection} from "typeorm";
import {Player} from "./entity/Player";
import isEmpty from "lodash/isEmpty";

const app = Express();
app.use(Express.json());

createConnection().then(async (connection) => {
  app.listen('5000',() => console.log("serever is up and running"))

  // create a player 
  app.post("/players" ,async (req:Request,res:Response) => {
    try {
     Player.create({
        full_name:req.body.full_name
      }).save();
      return res.status(201).json(req.body.full_name)
    } catch (err) {
      return res.status(500).json(err)
    }
  })

  // Get all players
  app.get("/players", async(_:Request, res:Response) => {
    const players = await Player.find();
    
    if(!isEmpty(players)) {
      return res.status(200).json(players)
    } 
      return res.send(JSON.stringify("No Player Found"))
  })
})
