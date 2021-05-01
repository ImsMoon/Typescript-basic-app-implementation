import { IRoute } from "./routes";
import {Request,Response} from "express";
import * as service from "../service/student.service"

const getHandler = async(req: Request, res: Response) => {
    const students = await service.getStudents();
    res.send(students);
};
const postHandler = (req: Request, res: Response) => {
    const studId = service.save(req.body);
    res.send(`Posting Student data ,New student id : ${studId}`);
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