"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const empresaSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    item_id: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
    },
    sigla: {
        type: String,
        required: true
    },
    lineas: {
        type: [String]
    }
});
const EmpresaModel = (0, mongoose_1.model)('empresas', empresaSchema);
exports.default = EmpresaModel;
//# sourceMappingURL=empresas.js.map