import { ConvenioDTO } from "./convenio-dto";
import { InstitucionDTO } from "./institucion-dto";
import { PaisDTO } from "./pais-dto";

export interface AprendicesExtDTO {
    id?: string;
    objetoFormacion: string;
    programaFormacion: string;
    nombre: string;
    fechaInicio: Date; 
    fechaFinal: Date; 
    pais: PaisDTO;
    institucion: InstitucionDTO;
    convenio: ConvenioDTO;
}
