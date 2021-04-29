import { IRoute } from "./routes";
import {Request,Response} from "express"

const getStudentData = (req: Request, res: Response) => {
    res.send(`requesting Student data \n ${req.method} at \n` + new Date());
};
const postStudentData = (req: Request, res: Response) => {
    res.send(`Posting Student data \n ${req.method} at \n` + new Date());
};
export const studentRoutes:IRoute[] = [
    {
        http: "get",
        path: "/student",
        handler: getStudentData
    },
    {
        http: "post",
        path: "/student",
        handler: postStudentData
    }
];