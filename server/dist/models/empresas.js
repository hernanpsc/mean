"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const empresaSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    }
});
const EmpresaModel = (0, mongoose_1.model)('empresas', empresaSchema);
exports.default = EmpresaModel;
//# sourceMappingURL=empresas.js.map