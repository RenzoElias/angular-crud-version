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
