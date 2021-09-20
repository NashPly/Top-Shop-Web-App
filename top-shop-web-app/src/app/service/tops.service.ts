import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tops } from "src/Classes/tops";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TopsService{

    private apiServerUrl = environment.apiBaseUrl + "/top";

    constructor(private http: HttpClient){}

    public getBlankTop(): Observable<Tops> {
        return this.http.get<Tops>(`${this.apiServerUrl}/getNewTop`)
    }

    public getTopById(id: number): Observable<Tops> {
        return this.http.get<Tops>(`${this.apiServerUrl}/getTopById/${id}`)
    }

    public saveTop(tops: Tops): Observable<Tops>{
        return this.http.post<Tops>(`${this.apiServerUrl}/save`, tops)
    }

    public saveById(tops: Tops): Observable<Tops>{
        return this.http.post<Tops>(`${this.apiServerUrl}/save/${tops.id}`,tops)
    }
}