import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (filename: string) => {
    const file = filename.split('.').shift();
    return file;
};

const importModule = async (filename: string) => {
    const cleanName = cleanFileName(filename);
    if (cleanName !== 'index') {
        try {
            const moduleRouter = await import(`./${cleanName}`);
            console.log(`Se esta cargando la ruta.../${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);
        } catch (error) {
            console.error(`Error loading route.../${cleanName}: ${error.message}`);
        }
    }
};

readdirSync(PATH_ROUTER).forEach((filename) => {
    importModule(filename);
});

export { router };
