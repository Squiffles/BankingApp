"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = exports.connection = void 0;
// ---------------- IMPORTS: ----------------
const mongoose = __importStar(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
// ---------------- CODE: ----------------
const DB_URL = process.env.DATABASE_URL;
// Conexión a la base de datos MongoDB
mongoose.connect("mongodb+srv://ProgrammersGuru:ProgrammersGuruTeam@proyecto-bancario.fjm1zvc.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const connection = mongoose.connection;
exports.connection = connection;
connection.once("open", () => {
    console.log("Conexión a MongoDB establecida correctamente.");
});
// Definir los modelos y agregarlos al objeto de modelos
const Account_1 = require("../models/Account");
const Card_1 = require("../models/Card");
const Currency_1 = require("../models/Currency");
const Transaction_1 = require("../models/Transaction");
const User_1 = require("../models/User");
// Crear un objeto para almacenar los modelos
const models = {
    Account: Account_1.AccountModel,
    Card: Card_1.CardModel,
    Currency: Currency_1.CurrencyModel,
    Transaction: Transaction_1.TransactionModel,
    User: User_1.UserModel,
};
exports.models = models;
