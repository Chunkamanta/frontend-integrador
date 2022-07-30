import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education.model'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }),
};

@Injectable({ 
    providedIn: 'root',
})

export class EducationService {
    baseUrl = '';

    constructor(private http: HttpClient) {}

    /* configuracion metodo GET */
    getEducation(): Observable<Education[]> {
        return this.http.get<Education[]>(this.baseUrl, { headers: httpOptions.headers });
    }

    getEducationById(id:number): Observable<Education> {
        return this.http.get<Education>(`${this.baseUrl}/${id}`, { headers: httpOptions.headers });
    }

    /* configuracion metodo post */
    postEducation(data: Education): Observable<Education> {
        return this.http.post<Education>(this.baseUrl, data, { headers: httpOptions.headers });
      }
      /* configuracion metodo put */
    putEducation(data: Education): Observable<Education> {
        return this.http.put<Education>(this.baseUrl, data, { headers: httpOptions.headers });
    }
    /* configuracion metodo delete */
    deleteEducation(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { headers: httpOptions.headers });
    }
}