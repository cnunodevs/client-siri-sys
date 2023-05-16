import { AsesorDTO } from "./asesor-dto";
import { InstitucionDTO } from "./institucion-dto";

export interface PersonalApoyoExteriorDTO {
    id?: string;
    objeto: string;
    nombre: string;
    cargo: string;
    dependenciaSena: string;
    fechaInicio: Date;
    fechaFinal: Date;
    institucion: InstitucionDTO;
    asesor: AsesorDTO;
}
