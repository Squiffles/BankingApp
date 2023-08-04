import { config } from "dotenv";
import server from "./src/config/server";
import { connection } from "./src/config/db";
import { validateRequiredEnvs } from "../SERVER/utils/enviroments";
// import { PORT } from "config";


config(); // Cargar las variables de entorno desde el archivo .env
const requiredEnvs = ["DATA_BASE_URL", "LOCAL_SERVER_PORT"]
validateRequiredEnvs(requiredEnvs); 


connection.once("open", () => {
    console.log("Connected to MongoDB!");

    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});

connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});