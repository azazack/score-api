import {Week} from "../entity/Week";
import Express, {Request,Response} from "express";
import isEmpty from "lodash/isEmpty";

const router = Express.Router();

// Add new week
router.post("/api/weeks",async (req:Request,res:Response) => {
    const exist_week = await Week.find({where:{
        week_num : req.body.week_num
        }})
    if(isEmpty(exist_week)){
        try {
            await Week.create({
                week_num:req.body.week_num
            }).save();
        } catch (err){
            return res.status(500).json(err)
        }
    } else {
        return res.status(500).send(JSON.stringify("Week Number Already Exist"))
    }
})

// Get all weeks
router.get("/api/weeks", async(req:Request, res:Response) => {
    const latest = req.query.latest;
    const weeks = await Week.find({
        order:{
            week_num:"DESC"
        },
        take:latest ? Number(latest) : 10
    });

    if(!isEmpty(weeks)) {
        return res.status(200).json(weeks)
    }
    return res.send(JSON.stringify("No score Found"))
})

// Get all weeks with scores
router.get("/api/weeks/scores", async(_:Request, res:Response) => {
    const weeks = await Week.find({ relations: ['scores','scores.winner','scores.players' ] });

    if(!isEmpty(weeks)) {
        return res.status(200).json(weeks)
    }
    return res.send(JSON.stringify("No score Found"))
})


export default router
