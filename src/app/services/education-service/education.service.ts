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
}