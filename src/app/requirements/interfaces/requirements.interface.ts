export interface UserRequirement {
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

export interface SendCrearRequirement {
    descripcion: string,
    idUsuarioSolicitante: number,
    id003AreaSolicitante: number,
    id005TipoRequirement: number,
}

export interface SendEditarRequirement {
    descripcion: string,
    idUsuarioSolicitante: number,
    id003AreaSolicitante: number,
    id005TipoRequirement: number,
}

export interface ReqTipoRequirement {
    idParam?: string;
    idParamType: string;
    name: number;
    status?: any;
}

export interface ResponseI{
    Response: string;
  }

export interface ListRequirements {
    idRequirement: number;
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
    id005TipoRequirement: {
        idParam: number;
        idParamType?: any;
        name: string;
        status?: any;
    };
    id004EstadoRequirement?: null;
}