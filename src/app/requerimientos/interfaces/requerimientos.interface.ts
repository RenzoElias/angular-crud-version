export interface Requerimiento {
    id?:              string;
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:         string; // https://kasdfjaskdfajsdf.com/img.png
}

export enum Publisher {
    NuevoSistema = "Nuevo Sistema",
    MejorarSistema = "Mejorar Sistema",
}
