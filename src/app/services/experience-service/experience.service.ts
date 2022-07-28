import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Experience } from 'src/app/models/experience.model'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }),
};

@Injectable({ 
    providedIn: 'root',
})

export class ExperienceService {
    baseUrl = '';

    constructor(private http: HttpClient) {}

    /* configuracion metodo GET */
    getExperience(): Observable<Experience[]> {
        return this.http.get<Experience[]>(this.baseUrl, { headers: httpOptions.headers });
    }
    /* configuracion metodo post */
    postExperience(): Observable<Experience[]> {
        return this.http.post<Experience[]>(this.baseUrl, { headers: httpOptions.headers });
      }
      /* configuracion metodo put */
    putExperience(): Observable<Experience[]> {
        return this.http.put<Experience[]>(this.baseUrl, { headers: httpOptions.headers });
    }
    /* configuracion metodo delete */
    deleteExperience(): Observable<Experience[]> {
        return this.http.delete<Experience[]>(this.baseUrl, { headers: httpOptions.headers });
    }
}