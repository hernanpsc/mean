"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlanesIA = exports.getProductsIA = exports.getPlanes = exports.searchProducts = exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.getProducts = exports.createProduct = void 0;
const clinicas_1 = __importDefault(require("./../models/clinicas"));
const planes_1 = require("./planes");
let regiones = [];
let clinicasPorRegiones = {};
async function obtenerRegionesDisponibles() {
    const regiones = await clinicas_1.default.distinct('ubicacion.region');
    return regiones;
}
async function organizarClinicasPorRegiones() {
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
}
// Llama a la función para organizar las clínicas por regiones
organizarClinicasPorRegiones();
const createProduct = async (item) => {
    const responseCreate = await clinicas_1.default.create(item);
    return responseCreate;
};
exports.createProduct = createProduct;
const getProducts = async () => {
    console.log('hola getProducts clinicas');
    const responseGet = await clinicas_1.default.find({});
    console.log('hola getProducts clinicas responseGet', responseGet);
    return responseGet;
};
exports.getProducts = getProducts;
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
const getProduct = async (id) => {
    const responseGetOne = await clinicas_1.default.findOne({ _id: id });
    return responseGetOne;
};
exports.getProduct = getProduct;
const updateProduct = async (id, data) => {
    const responseUpdate = await clinicas_1.default.findOneAndUpdate({ _id: id }, data, { new: true });
    return responseUpdate;
};
exports.updateProduct = updateProduct;
const deleteProduct = async (id) => {
    const responsedelete = await clinicas_1.default.deleteOne({ _id: id });
    return responsedelete;
};
exports.deleteProduct = deleteProduct;
const searchProducts = async (query) => {
    // Realiza la búsqueda en la base de datos, por ejemplo, por nombre
    const responseSearch = await clinicas_1.default.find({
        concept: { $regex: query, $options: 'i' },
    });
    return responseSearch;
};
exports.searchProducts = searchProducts;
const getPlanes = async () => {
    const responseGet = await (0, planes_1.obtenerPlanesConClinicas)();
    return responseGet;
};
exports.getPlanes = getPlanes;
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
//# sourceMappingURL=clinicas.js.map