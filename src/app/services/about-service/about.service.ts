import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { About } from 'src/app/models/about.model'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }),
};

@Injectable({ 
    providedIn: 'root',
})

export class AboutService {
    baseUrl = '';

    constructor(private http: HttpClient) {}

    /* configuracion metodo GET */
    getAbout(): Observable<About[]> {
        return this.http.get<About[]>(this.baseUrl, { headers: httpOptions.headers });
    }
    /* configuracion metodo post */
    postAbout(): Observable<About[]> {
        return this.http.post<About[]>(this.baseUrl, { headers: httpOptions.headers });
      }
      /* configuracion metodo put */
    putAbout(): Observable<About[]> {
        return this.http.put<About[]>(this.baseUrl, { headers: httpOptions.headers });
    }
    /* configuracion metodo delete */
    deleteAbout(): Observable<About[]> {
        return this.http.delete<About[]>(this.baseUrl, { headers: httpOptions.headers });
    }
}