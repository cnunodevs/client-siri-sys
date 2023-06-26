import { ConvenioDTO } from "./convenio-dto";

export interface AprendicesFormadosColDTO {
    id?: string | number;
    nombre: string;
    apellido: string;
    documento: string;
    programaFormacion: string;
    instructor: string;
    objetoTransferencia: string;
    fechaInicial: Date;
    fechaFinal: Date;
    convenio: ConvenioDTO;
}
