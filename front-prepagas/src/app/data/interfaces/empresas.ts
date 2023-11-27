
import { Ubicacion as MiUbicacion, Imagen as MiImagen } from './interfaces';

export interface Empresa {
  _id?: string;
  name?: string;
  ubicacion?: MiUbicacion;
  sucursales?: MiUbicacion[];
  telefono?: string;
  imagen?: MiImagen[];
}
