import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StandardTop } from "src/Classes/standardTop";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class StandardTopService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getStandardTops(): Observable<StandardTop[]> {
        return this.http.get<StandardTop[]>(`${this.apiServerUrl}`)
    }

    public getStandardTop(sTop:StandardTop): Observable<StandardTop> {
        return this.http.post<StandardTop>(`${this.apiServerUrl}/add/`, sTop)
    }

    public updateStandardTop(sTop:StandardTop): Observable<StandardTop> {
        return this.http.put<StandardTop>(`${this.apiServerUrl}/update/`, sTop)
    }

    /*
    public deleteStandardTop(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`)
    }
    */
}
