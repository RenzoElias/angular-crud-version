import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Requerimiento } from '../interfaces/requerimientos.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequerimientosService { // API - URL - SE CAMBIARA => /solicitudes

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  // OBTENER TODO
  getRequerimientos(): Observable<Requerimiento[]> {
    return this.http.get<Requerimiento[]>(`${ this.baseUrl }/solicitudes`);
  }

  // OBTENER UNO
  getRequerimientoPorId( id: string ):Observable<Requerimiento> {
    return this.http.get<Requerimiento>(`${ this.baseUrl }/solicitudes/${ id }`);
  }

  // AGREGAR UN requerimiento
  agregarRequerimiento( requerimiento: Requerimiento ): Observable<Requerimiento> {
    return this.http.post<Requerimiento>(`${ this.baseUrl }/solicitudes`, requerimiento );
  }

  // ACTUALIZAR
  actualizarRequerimiento( requerimiento: Requerimiento ): Observable<Requerimiento> {
    return this.http.put<Requerimiento>(`${ this.baseUrl }/solicitudes/${ requerimiento.id }`, requerimiento );
  }

  // BORRAR
  borrarRequerimiento( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/solicitudes/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Requerimiento[]> {
    return this.http.get<Requerimiento[]>(`${ this.baseUrl }/solicitudes?q=${ termino }&_limit=6`);
  }

}
