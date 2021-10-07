import * as express from "express";
import {Request,Response} from "express";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import "reflect-metadata";

createConnection().then(connection => {
  const userRepository = connection.getRepository(User);

  const app = express();
  app.use(express.json());

  app.get("/users" , async function (req:Request,res:Response) {
    const users = await userRepository.find();
    res.json(users)
  })

  app.get("/users/:id", async function (req:Request,res:Response) {
    const results = await userRepository.findOne(req.params.id)
    if(results) {
      return res.send(results)
    }
    return res.send(JSON.stringify("No User Found"));
  })

  app.delete("/users/:id", async (req:Request,res:Response) => {
    const result = await userRepository.delete(req.params.id);
    return res.send(result)
  })

  // app.get("/users/:id", async function(req: Request, res: Response) {
  //   const results = await userRepository.findOne(req.params.id);
  //   return res.send(results);
  // });


  app.listen(4000)
})
