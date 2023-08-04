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
// import { Sequelize, Model, DataTypes } from 'sequelize';
const mongoose_1 = __importStar(require("mongoose"));
const UserScheme = new mongoose_1.Schema({
    name: {
        type: String,
        allowNull: false,
    },
    phone: {
        type: String,
        allowNull: false,
    },
    email: {
        type: String,
        allowNull: false,
        // validate: {
        //     isEmail: true
        // }
    },
    picture: {
        type: String,
        allowNull: true,
        defaultValue: 'https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-24.jpg',
    },
    admin: {
        type: Boolean,
        defaultValue: false,
        allowNull: false,
    },
    active: {
        type: Boolean,
        defaultValue: false,
        allowNull: false,
    },
    address: {
        type: JSON,
    },
});
const User = mongoose_1.default.model("User", UserScheme);
// ---------------- EXPORTS: ----------------
exports.default = User;
