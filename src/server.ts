import express, { Application} from "express";
import {routes} from "./controller/routes";


const init = (): Application => {
    let app = express();

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