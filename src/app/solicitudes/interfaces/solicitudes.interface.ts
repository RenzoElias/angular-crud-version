export interface UserSolicitud {
    idPersona: number;
    nombres: string;
    apePaterno: string;
    apeMaterno: string;
    id002Cargo: {
        idParam: number;
        idParamType?: any;
        name: string;
        status?: any;
    };
    id003Area: {
        idParam: number;
        idParamType?: any;
        name: string;
        status?: any;
    };
    id001Estado?: any;
}

export interface SendCrearSolicitud {
    descripcion: string,
    idUsuarioSolicitante: number,
    id003AreaSolicitante: number,
    id005TipoSolicitud: number,
}

export interface SendEditarSolicitud {
    descripcion: string,
    idUsuarioSolicitante: number,
    id003AreaSolicitante: number,
    id005TipoSolicitud: number,
}

export interface ReqTipoSolicitud {
    idParam?: string;
    idParamType: string;
    name: number;
    status?: any;
}

export interface ResponseI{
    Response: string;
  }

export interface ListSolicitudes {
    idSolicitud: number;
    fechaRegistro: string;
    descripcion: string;
    listaTrazabilidad?: any;
    usuarioActual: {
        idPersona: number;
        nombres?: any;
        apePaterno?: any;
        apeMaterno?: any;
        nombresCompletos: string;
        nombreCargo: string;
        nombreArea: string;
        id002Cargo?: any;
        id003Area?: any;
        id001Estado?: any;
    };
    usuarioDestino: {
        idPersona: number;
        nombres?: any;
        apePaterno?: any;
        apeMaterno?: any;
        nombresCompletos: string;
        nombreCargo: string;
        nombreArea: string;
        id002Cargo?: any;
        id003Area?: any;
        id001Estado?: any;
    };
    id003AreaSolicitante?: null;
    id005TipoSolicitud: {
        idParam: number;
        idParamType?: any;
        name: string;
        status?: any;
    };
    id004EstadoSolicitud?: null;
}