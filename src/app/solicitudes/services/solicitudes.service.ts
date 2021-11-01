import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseI } from '../interfaces/solicitudes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  // OBTENER TODO TIPO DE SOLICITUD
  getAllSolicitud():Observable<ResponseI> {
    return this.http.get<ResponseI>(`http://192.168.1.4:1991/api/solicitud/requerimientos/obtener-solicitud`);
  }
  getAllTipoSolicitud():Observable<ResponseI> {
    return this.http.get<ResponseI>(`http://192.168.1.4:1991/api/solicitud/parametros/find-all?idParametrosTipo=5`);
  }
  getSolicitudPorId( id: string ):Observable<ResponseI> {
    return this.http.get<ResponseI>(`http://192.168.1.4:1991/api/solicitud/requerimientos/obtener-solicitud?idSolicitud=${ id }`);
  }
  getUserSolicitudPorId( id: number ):Observable<ResponseI> {
    return this.http.get<ResponseI>(`http://192.168.1.4:1991/api/solicitud/persona/obtenerPersona?idPersona=${ id }`);
  }
  // actualizar
  // agregarSolicitud( solicitud: Solicitud ): Observable<Solicitud> {
  //   return this.http.post<Solicitud>(`${ this.baseUrl }/api`, solicitud );
  // }

  // actualizar
  // actualizarSolicitud( solicitud: Solicitud ): Observable<Solicitud> {
  //   return this.http.put<Solicitud>(`${ this.baseUrl }/api/${ solicitud.id }`, solicitud );
  // }

  borrarSolicitud( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/api/${ id }`);
  }

}
