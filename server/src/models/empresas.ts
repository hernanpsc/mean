import { Schema, model } from "mongoose";
import { Empresa } from "../interfaces/empresas";

const empresaSchema = new Schema<Empresa>(
    {
    name: {
        type: String,
        required:true
    },
    item_id: {
        type: Number,
        required:true
    },    
    images: {
        type: [String],
    },
    sigla: {
        type: String,
        required:true
    },
    lineas: {
        type: [String]
    }
})

const EmpresaModel = model('empresas', empresaSchema);
export default EmpresaModel;