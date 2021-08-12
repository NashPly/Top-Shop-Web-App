import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Finish } from "src/Classes/finish";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FinishService {
    
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getFinishes(): Observable<Finish[]> {
        return this.http.get<Finish[]>(`${this.apiServerUrl}/getFinishes`)
    }
}