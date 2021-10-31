import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Solicitud, ResponseI } from '../interfaces/solicitudes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  // OBTENER TODO
  getSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${ this.baseUrl }/api`);
  }

  // OBTENER UNO
  getSolicitudPorId( id: string ):Observable<Solicitud> {
    return this.http.get<Solicitud>(`${ this.baseUrl }/api/${ id }`);
  }

  // OBTENER TODO TIPO DE SOLICITUD
  getAllTipoSolicitud():Observable<ResponseI> {
    return this.http.get<ResponseI>(`http://192.168.1.4:1991/api/solicitud/parametros/find-all?idParametrosTipo=5`);
  }

  // AGREGAR UNA SOLICITUD
  agregarSolicitud( solicitud: Solicitud ): Observable<Solicitud> {
    return this.http.post<Solicitud>(`${ this.baseUrl }/api`, solicitud );
  }

  // ACTUALIZAR
  actualizarSolicitud( solicitud: Solicitud ): Observable<Solicitud> {
    return this.http.put<Solicitud>(`${ this.baseUrl }/api/${ solicitud.id }`, solicitud );
  }

  // BORRAR
  borrarSolicitud( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/api/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${ this.baseUrl }/api?q=${ termino }&_limit=6`);
  }

}
