export interface ReportesDTO {
    id?: number | string;
    nombre: string;
    descripcion: string
    url: string;
    activo: boolean;
    fechaCreacion?: Date;
    ultimaActualizacion?: Date;
}