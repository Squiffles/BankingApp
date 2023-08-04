import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import express, { Request, Response, Application, NextFunction } from "express";
import cors from 'cors';
// import routes from "./routes/index.js";


// Extiende la interfaz global de Express.Application
declare global {
    namespace Express {
        interface Application {
            serverName: string;
        }
    }
}

const server: Application = express();
server.serverName = "PROGRAMERSGURU_TEAM_SERVER";

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
// server.use("/", routes);



server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: "Internal Server Error, please check your server console" });
    console.error(err);
});


export default server;