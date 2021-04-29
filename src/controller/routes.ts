import {Request,Response} from "express"
import { studentRoutes } from "./student.controller";

export type Handler = (req:Request,res:Response) => void

export interface IRoute{
    http: string,
    path: string,
    handler: Handler
}

export const routes:IRoute[] = [
    {
        http: "get",
        path: "/",
        handler: (req:Request,res:Response)=>{
            res.send(`requesting again\n ${req.method} at \n`+ new Date())
        }
    },
    {
        http: "get",
        path: "/health",
        handler: (req:Request,res:Response)=>{
            res.send(`Server is alive \n ${req.method} at \n`+ new Date() );
        }
    },
    ...studentRoutes
];