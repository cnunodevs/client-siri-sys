import { ConvenioDTO } from "./convenio-dto";
import { InstitucionDTO } from "./institucion-dto";
import { PaisDTO } from "./pais-dto";

export interface InstructoresExtDTO {
    id?: string;
    no: number;
    nombre: string;
    objeto: string;
    coordinacionAcademica: string;
    contratista: string;
    fechaInicio: Date;
    fechaFinal: Date;
    pais: PaisDTO;
    institucion: InstitucionDTO;
    convenio: ConvenioDTO;
}
