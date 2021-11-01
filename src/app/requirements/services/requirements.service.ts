import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseI, SendCrearRequirement, SendEditarRequirement } from '../interfaces/requirements.interface';
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
  agregarRequirement( requirement: SendCrearRequirement ): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${ this.baseUrl }/api`, requirement );
  }

  // ACTUALIZAR
  actualizarRequirement( requirement: SendEditarRequirement ): Observable<ResponseI> {
    return this.http.put<ResponseI>(`${ this.baseUrl }/api/${ requirement.idUsuarioSolicitante }`, requirement );
  }

  // BORRAR
  borrarRequirement( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/api/${ id }`);
  }

}
