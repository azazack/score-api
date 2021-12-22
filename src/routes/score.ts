import {Score} from "../entity/Score";
import Express, {Request,Response} from "express";
import isEmpty from "lodash/isEmpty";

const router = Express.Router();

router.post("/api/scores" ,async (req:Request,res:Response) => {
    try {
        await Score.create({
            result: req.body.score.result,
            date: req.body.score.date ? req.body.score.date : new Date(),
            players: req.body.score.players,
            winner: req.body.score.winner,
            week:req.body.score.week
        }).save();
        return res.status(201).json(req.body.score)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.get("/api/scores", async(_:Request, res:Response) => {
    const scores = await Score.find({ relations: ['winner','players'],order:{date:"DESC"} });

    if(!isEmpty(scores)) {
        return res.status(200).json(scores)
    }
    return res.send(JSON.stringify("No score Found"))
})


export default router;


