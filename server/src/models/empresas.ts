import { Schema, model } from "mongoose";
import { Empresa } from "../interfaces/empresas";

const empresaSchema = new Schema<Empresa>(
    {
    name: {
        type: String,
        required:true
    }
})

const EmpresaModel = model('empresas', empresaSchema);
export default EmpresaModel;