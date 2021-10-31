export interface Solicitud {
    id?: string;
    area: string;
    tipo: Publisher;
    area_cargo: string;
    nombre: string;
    area_destino: string;
    descripcion?: string;
}

export enum Publisher {
    NuevoSistema = "Nuevo Sistema",
    MejorarSistema = "Mejorar Sistema",
}

export interface SendSolicitud {
    id?: string;
    area: string;
    tipo: number;
    area_cargo: string;
    nombre: string;
    area_destino: string;
    descripcion?: string;
}

export interface ReqTipoSolicitud {
    idParam?: string;
    idParamType: string;
    name: number;
    status?: null;
}

export interface ResponseI{

    Response: string;

  }

export interface sendCorrectSolicitud {

}