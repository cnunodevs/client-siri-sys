import { ConvenioDTO } from "./convenio-dto";
import { InstitucionDTO } from "./institucion-dto";

export interface InstructoresFormadosColDTO {
    id?: string;
    objetoFormacion: string;
    institucionFormadoraExt: InstitucionDTO;
    nombre: string;
    apellido: string;
    fechaInicial: Date;
    fechaFinal: Date;
    convenio: ConvenioDTO;
}
