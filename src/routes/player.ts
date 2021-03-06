  import {Player} from "../entity/Player";
  import isEmpty from "lodash/isEmpty";
  import Express, {Request,Response} from "express";

  const router = Express.Router();

  // create a player
  router.post("/api/players" ,async (req:Request,res:Response) => {
    try {
     await Player.create({
       full_name: req.body.full_name
     }).save();
      return res.status(201).json(req.body.full_name)
    } catch (err) {
      return res.status(500).json(err)
    }
  })

  // Get all players
  router.get("/api/players", async(_:Request, res:Response) => {
    const players = await Player.find();

    if(!isEmpty(players)) {
      return res.status(200).json(players)
    }
    return res.send(JSON.stringify("No Player Found"))
  })

  // Get one player by id
  router.get("/api/players/:id", async(req:Request,res:Response) => {
    const player= await Player.findOne(req.params.id);

      try {
        if(player) {
          return res.status(200).json(player)
        }
        return res.send(JSON.stringify("No Player Found"))
      } catch(err) {
        return res.status(500).json(err)
      }
    })



  // Delete a player by id
  router.delete("/api/players/:id", async(req:Request,res:Response) => {
    try {
      await (await Player.findOne(req.params.id)).remove();
      return res.status(204).send(JSON.stringify({message:"Player deleted successfully"}))
    }
    catch(err) {
      return res.status(500).json(err)
    }
  })

  export default router;
