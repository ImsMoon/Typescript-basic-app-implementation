import { IRoute } from "./routes";
import {Request,Response} from "express";
import * as service from "../service/student.service"

const getHandler = async(req: Request, res: Response) => {
    const students = await service.getAll(coll);
    res.send(students);
};

const coll = service.StudentDocument;
const postHandler = (req: Request, res: Response) => {
    const studId = service.save(coll,req.body);
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