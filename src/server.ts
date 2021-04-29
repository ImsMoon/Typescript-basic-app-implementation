import express, { Application, Request,Response} from "express";
import router from "./controller/routes";


const init = (): Application => {
    let app = express();

    // app.get('/', (req,res)=>{
    //     res.send(`requesting \n ${req.method} at \n`+ new Date())
    // })

    app.use("/api",router);

    app.use("/",(req:Request,res:Response)=>{
        res.send(`Default route ${req.method}`)
    })

    return app;
}

const app = init();
app.listen(3000,()=>{
    console.log("server is listening");
})