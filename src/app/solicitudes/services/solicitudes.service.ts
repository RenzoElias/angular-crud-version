import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Solicitud } from '../interfaces/solicitudes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${ this.baseUrl }/solicitudes`);
  }

  getSolicitudPorId( id: string ):Observable<Solicitud> {
    return this.http.get<Solicitud>(`${ this.baseUrl }/solicitudes/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${ this.baseUrl }/solicitudes?q=${ termino }&_limit=6`);
  }

  agregarSolicitud( solicitud: Solicitud ): Observable<Solicitud> {
    return this.http.post<Solicitud>(`${ this.baseUrl }/solicitudes`, solicitud );
  }

  actualizarSolicitud( solicitud: Solicitud ): Observable<Solicitud> {
    return this.http.put<Solicitud>(`${ this.baseUrl }/solicitudes/${ solicitud.id }`, solicitud );
  }

  borrarSolicitud( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/solicitudes/${ id }`);
  }

}
