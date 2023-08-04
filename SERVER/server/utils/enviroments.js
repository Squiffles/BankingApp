"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequiredEnvs = void 0;
const validateRequiredEnvs = (requiredEnvs) => {
    for (const requiredEnv of requiredEnvs) {
        if (!process.env[requiredEnv]) {
            throw new Error(`${requiredEnv} must be defined on the .env file`);
        }
    }
};
exports.validateRequiredEnvs = validateRequiredEnvs;
