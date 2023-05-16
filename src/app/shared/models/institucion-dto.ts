import { PaisDTO } from "./pais-dto";

export interface InstitucionDTO {
    id?: string;
    codigo: string;
    nombre: string;
    tipo: string;
    pais: PaisDTO;
}
