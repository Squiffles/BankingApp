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
// ---------------- IMPORTS: ----------------
const mongoose_1 = __importStar(require("mongoose"));
const isValidAccountNumber = (str) => {
    const accountNumber = str.split("-");
    return accountNumber.every((group) => /^\d{4}$/.test(group));
};
// Definimos el esquema de Mongoose
const accountScheme = new mongoose_1.Schema({
    accountNumber: {
        type: String,
        required: true,
        validate: {
            validator: isValidAccountNumber,
            message: (props) => `Invalid account number: ${props.value}`,
        },
    },
    accountType: {
        type: String,
        enum: ["SAVING", "CURRENT", "SALARY"],
        required: true,
    },
    accountBalances: {
        type: Number,
        required: true,
    },
    accountStatus: {
        type: Boolean,
        required: true,
    },
});
// Definimos un método personalizado en el esquema para validar el número de cuenta
accountScheme.methods.validateAccountNumber = function () {
    return isValidAccountNumber(this.accountNumber);
};
// Creamos el modelo de Mongoose
const AccountModel = mongoose_1.default.model("Account", accountScheme);
// ---------------- EXPORTS: ----------------
exports.default = AccountModel;
