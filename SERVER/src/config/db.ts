// ---------------- IMPORTS: ----------------
import * as mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();



// ---------------- CODE: ----------------
const DB_URL = process.env.DATABASE_URL;

// Crear una interfaz para representar el objeto de modelos
interface Models {
    Account: mongoose.Model<AccountDocument>;
    Card: mongoose.Model<CardDocument>;
    Currency: mongoose.Model<CurrencyDocument>;
    Transaction: mongoose.Model<TransactionDocument>;
    User: mongoose.Model<UserDocument>;
}

// Conexión a la base de datos MongoDB
mongoose.connect("mongodb+srv://ProgrammersGuru:ProgrammersGuruTeam@proyecto-bancario.fjm1zvc.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Conexión a MongoDB establecida correctamente.");
});

// Definir los modelos y agregarlos al objeto de modelos
import { AccountModel } from "../models/Account";
import { CardModel } from "../models/Card";
import { CurrencyModel } from "../models/Currency";
import { TransactionModel } from "../models/Transaction";
import { UserModel } from "../models/User";

// Crear un objeto para almacenar los modelos
const models: Models = {
    Account: AccountModel,
    Card: CardModel,
    Currency: CurrencyModel,
    Transaction: TransactionModel,
    User: UserModel,
};



// ---------------- EXPORTS: ----------------
export { connection, models };