import { Router } from "express";

import * as express from "express";
import { getPrecios} from '../controllers/cotizacion';

const router = Router();

router.use(express.json());
router.post('/', (req, res) => {getPrecios(req, res) });
  
  
export { router }





