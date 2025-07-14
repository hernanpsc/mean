"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizarClinicasPorRegiones = exports.getPlanesIA = exports.getProductsIA = void 0;
const clinicas_1 = __importDefault(require("./../models/clinicas"));
const planes_1 = require("./planes");
let regiones = [];
let clinicasPorRegiones = {};
async function obtenerRegionesDisponibles() {
    const regiones = await clinicas_1.default.distinct('ubicacion.region');
    return regiones;
}
const organizarClinicasPorRegiones = async () => {
    regiones = await obtenerRegionesDisponibles();
    // Inicializa un objeto para cada región
    for (const region of regiones) {
        clinicasPorRegiones[region] = [];
    }
    // Realiza una consulta a la base de datos para obtener todas las clínicas
    const clinicas = await clinicas_1.default.find({});
    // Organiza las clínicas por región
    for (const clinica of clinicas) {
        const region = clinica.ubicacion.region;
        clinicasPorRegiones[region] = clinicasPorRegiones[region] || [];
        clinicasPorRegiones[region].push(clinica);
    }
    return clinicasPorRegiones;
};
exports.organizarClinicasPorRegiones = organizarClinicasPorRegiones;
// Llama a la función para organizar las clínicas por regiones
organizarClinicasPorRegiones();
const getProductsIA = async () => {
    const responseGet = await clinicas_1.default.find({}, {
        entity: 1,
        direccion: 1,
        barrio: 1,
        partido: 1,
        region: 1,
        cartillas: 1,
        // explícitamente excluye _id si no lo querés
        _id: 0
    });
    return responseGet;
};
exports.getProductsIA = getProductsIA;
const getPlanesIA = async () => {
    const responseGet = await (0, planes_1.obtenerPlanesConClinicas)();
    const getPlanesIA = async () => {
        const responseGet = await (0, planes_1.obtenerPlanesConClinicas)();
        const responseFiltered = responseGet.map(plan => ({
            name: plan.name,
            empresa: plan.empresa,
            clinicas: (plan.clinicas || []).map(clinica => ({
                nombre: clinica.nombre,
                region: clinica.region
            }))
        }));
        return responseFiltered;
    };
};
exports.getPlanesIA = getPlanesIA;
//# sourceMappingURL=chat.js.map