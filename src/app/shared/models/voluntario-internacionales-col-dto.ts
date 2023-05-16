import { AsesorDTO } from "./asesor-dto";
import { ConvenioDTO } from "./convenio-dto";
import { PaisDTO } from "./pais-dto";

export interface VoluntarioInternacionalesColDTO {
    id?: string;
    nombre: string;
    objeto: string;
    centroFormacion: string;
    fechaInicio: Date;
    fechaFinal: Date;
    pais: PaisDTO;
    asesor: AsesorDTO;
    convenio: ConvenioDTO;
}
