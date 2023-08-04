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
exports.CardModel = void 0;
// ---------------- IMPORTS: ----------------
const mongoose_1 = __importStar(require("mongoose"));
function isValidCardNumber(str) {
    const cardNumber = str.split("-");
    return cardNumber.every((group) => /^\d{4}$/.test(group));
}
const cardScheme = new mongoose_1.Schema({
    account_number: {
        type: String,
        required: true,
        validate: {
            validator: isValidCardNumber,
            message: (props) => `Invalid card number: ${props.value}`,
        },
    },
    expirationDate: {
        type: String,
        required: true,
    },
    cardType: {
        type: String,
        required: true,
    },
    cvv: {
        type: String,
        required: true,
    },
});
const CardModel = mongoose_1.default.model("Card", cardScheme);
exports.CardModel = CardModel;
