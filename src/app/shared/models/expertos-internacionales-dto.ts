import { AsesorDTO } from "./asesor-dto";
import { ConvenioDTO } from "./convenio-dto";
import { InstitucionDTO } from "./institucion-dto";
import { PaisDTO } from "./pais-dto";

export interface ExpertosInternacionalesDTO {
    id?: string;
    nombre: string;
    cargo: string;
    objeto: string;
    fechaInicio: Date;
    fechaFinal: Date; 
    pais: PaisDTO;
    institucion: InstitucionDTO;
    asesor: AsesorDTO;
    convenio: ConvenioDTO;
}
