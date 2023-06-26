import { PaisDTO } from "./pais-dto";

export interface InstitucionDTO {
    id?: number;
    codigo?: string;
    nombre?: string;
    tipo?: string;
    pais?: PaisDTO;
}
