import express, { Application,Request,Response } from "express";

export type Handler = (req:Request,res:Response) => void

interface IRoute{
    http: string,
    path: string,
    handler: Handler
}

const init = (): Application => {
    let app = express();

    let routes:IRoute[] = [
        {
            http: "get",
            path: "/",
            handler: (req:Request,res:Response)=>{
                res.send(`requesting again\n ${req.method} at \n`+ new Date())
            }
        },
        {
            http: "get",
            path: "/dictionary",
            handler: (req:Request,res:Response)=>{
                res.send(`Dictinary 2\n ${req.method} at \n`+ new Date() );
            }
        }
    ]

    // app.get('/', (req,res)=>{
    //     res.send(`requesting \n ${req.method} at \n`+ new Date())
    // })

    routes.forEach((route)=>{
        (app as any)[route.http](route.path,route.handler)
    })

    return app;
}

const app = init();
app.listen(3000,()=>{
    console.log("server is listening");
})