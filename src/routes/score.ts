import {Score} from "../entity/Score";
import Express, {Request,Response} from "express";
import isEmpty from "lodash/isEmpty";

const router = Express.Router();

router.post("/api/score" ,async (req:Request,res:Response) => {
    try {
        Score.create({
            result:req.body.score.result,
            date:new Date(),
            players:req.body.score.players,
            winner:req.body.score.winner,
        }).save();
        return res.status(201).json(req.body.result)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.get("/api/scores", async(_:Request, res:Response) => {
    const scores = await Score.find({ relations: ['winner','players'] });

    if(!isEmpty(scores)) {
        return res.status(200).json(scores)
    }
    return res.send(JSON.stringify("No score Found"))
})


export default router;


