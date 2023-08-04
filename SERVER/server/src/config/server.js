"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import routes from "./routes/index.js";
require("./db.js");
const server = (0, express_1.default)();
server.serverName = "PROGRAMERSGURU_TEAM_SERVER";
server.use((0, cors_1.default)());
server.use(body_parser_1.default.urlencoded({ extended: true, limit: "50mb" }));
server.use(body_parser_1.default.json({ limit: "50mb" }));
server.use((0, cookie_parser_1.default)());
server.use((0, morgan_1.default)("dev"));
// server.use("/", routes);
server.use((err, req, res, next) => {
    res.status(500).json({ error: "Internal Server Error, please check your server console" });
    console.error(err);
});
module.exports = server;
/*
const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/
