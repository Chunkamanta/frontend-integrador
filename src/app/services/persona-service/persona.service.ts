import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private URL = 'https://backend-argpro1711.herokuapp.com/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
  }
}
