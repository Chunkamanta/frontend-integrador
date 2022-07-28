import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/models/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  baseUrl = '';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.baseUrl+ 'traer/perfil');
  }
}