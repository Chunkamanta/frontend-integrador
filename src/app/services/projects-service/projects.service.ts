import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/projects.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }),
};

@Injectable({ 
    providedIn: 'root',
})

export class ProjectsService {
    baseUrl = '';

    constructor(private http: HttpClient) {}

    /* configuracion metodo GET */
    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.baseUrl, { headers: httpOptions.headers });
    }

    getProjectById(id:number): Observable<Project> {
        return this.http.get<Project>(`${this.baseUrl}/${id}`, { headers: httpOptions.headers }) ;
    }

    /* configuracion metodo post */
    postProject(data:Project): Observable<Project> {
        return this.http.post<Project>(this.baseUrl, data, { headers: httpOptions.headers });
      }
      /* configuracion metodo put */
    putProject(data:Project): Observable<Project> {
        return this.http.put<Project>(this.baseUrl, data, { headers: httpOptions.headers });
    }
    /* configuracion metodo delete */
    deleteProject(id:number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { headers: httpOptions.headers });
    }
}