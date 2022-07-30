import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Work } from 'src/app/models/work.model'

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
    getWorks(): Observable<Work[]> {
        return this.http.get<Work[]>(this.baseUrl, { headers: httpOptions.headers });
    }

    getWorkById(id:number): Observable<Work> {
        return this.http.get<Work>(`${this.baseUrl}/${id}`, { headers: httpOptions.headers }) ;
    }

    /* configuracion metodo post */
    postWork(data:Work): Observable<Work> {
        return this.http.post<Work>(this.baseUrl, data, { headers: httpOptions.headers });
      }
      /* configuracion metodo put */
    putWork(data:Work): Observable<Work> {
        return this.http.put<Work>(this.baseUrl, data, { headers: httpOptions.headers });
    }
    /* configuracion metodo delete */
    deleteWork(id:number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { headers: httpOptions.headers });
    }
}