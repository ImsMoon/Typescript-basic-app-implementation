import { IRoute } from "./routes";
import {Request,Response} from "express"

export const studentRoutes:IRoute[] = [
    {
        http: "get",
        path: "/student",
        handler: (req:Request,res:Response)=>{
            res.send(`requesting Student data \n ${req.method} at \n`+ new Date())
        }
    },
    {
        http: "post",
        path: "/student",
        handler: (req:Request,res:Response)=>{
            res.send(`Posting Student data \n ${req.method} at \n`+ new Date() );
        }
    }
];