import { IRoute } from "./routes";
import {Request,Response} from "express";
import {getStudents} from "../service/student.service"

const getHandler = async(req: Request, res: Response) => {
    const students = await getStudents();
    res.send(students);
};
const postHandler = (req: Request, res: Response) => {
    res.send(`Posting Student data \n ${req.method} at \n` + new Date());
};
export const studentRoutes:IRoute[] = [
    {
        http: "get",
        path: "/student",
        handler: getHandler
    },
    {
        http: "post",
        path: "/student",
        handler: postHandler
    }
];