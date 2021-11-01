import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseI } from '../interfaces/requirements.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  // OBTENER TODO TIPO DE SOLICITUD
  getAllRequirement():Observable<ResponseI> {
    return this.http.get<ResponseI>(`http://192.168.1.4:1991/api/solicitud/requerimientos/obtener-solicitud`);
  }

  // OBTENER TODO TIPO DE SOLICITUD
  getAllTipoRequirement():Observable<ResponseI> {
    return this.http.get<ResponseI>(`http://192.168.1.4:1991/api/solicitud/parametros/find-all?idParametrosTipo=5`);
  }

  // OBTENER UNA SOLICITUD
  getRequirementPorId( id: string ):Observable<ResponseI> {
    return this.http.get<ResponseI>(`http://192.168.1.4:1991/api/solicitud/requerimientos/obtener-solicitud?idRequirement=${ id }`);
  }
  // OBTENER USER SOLICITUD
  getUserRequirementPorId( id: number ):Observable<ResponseI> {
    return this.http.get<ResponseI>(`http://192.168.1.4:1991/api/solicitud/persona/obtenerPersona?idPersona=${ id }`);
  }


  // AGREGAR UNA SOLICITUD
  // agregarRequirement( solicitud: Requirement ): Observable<Requirement> {
  //   return this.http.post<Requirement>(`${ this.baseUrl }/api`, solicitud );
  // }

  // // ACTUALIZAR
  // actualizarRequirement( solicitud: Requirement ): Observable<Requirement> {
  //   return this.http.put<Requirement>(`${ this.baseUrl }/api/${ solicitud.id }`, solicitud );
  // }

  // BORRAR
  borrarRequirement( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/api/${ id }`);
  }

  // getSugerencias( termino: string ): Observable<Requirement[]> {
  //   return this.http.get<Requirement[]>(`${ this.baseUrl }/api?q=${ termino }&_limit=6`);
  // }

}
