"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (req, res, next) => {
    const header = req.headers;
    const userAgent = header["user-agent"];
    console.log("userAgent", userAgent);
    next();
};
exports.logMiddleware = logMiddleware;
//# sourceMappingURL=log.js.map