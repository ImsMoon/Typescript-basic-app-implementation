import express, { Application, Request,Response} from "express";
import router from "./controller/routes";
import mongoose from "mongoose";


const mongoSetup = async () => {
    const url = "mongodb+srv://MoonUser:1GhaiaPK4RYlwIdP@cluster0.tntsy.mongodb.net/TSC_StudentDB?retryWrites=true&w=majority";
    const options: mongoose.ConnectOptions ={
        useNewUrlParser : true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }; 
    try {
        await mongoose.connect(url,options);
        console.log("Mongo conn stablished");
        mongoose.Promise = global.Promise;
    } catch (error) {
        console.log(`err ${error}`);
    }
}


const  init = async (): Promise<void> => {
    let app = express();
    app.use(express.json());// configr json
    // app.get('/', (req,res)=>{
    //     res.send(`requesting \n ${req.method} at \n`+ new Date())
    // })

    app.use("/api",router);

    app.use("/",(req:Request,res:Response)=>{
        res.send(`Default route ${req.method}`)
    })

    await mongoSetup();
    // app.listen(3000,()=>{
    //     console.log("server is listening");
    // })
    await app.listen(3000);
    //return app;
}

init();
