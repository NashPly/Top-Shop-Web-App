import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SinkType } from "src/Classes/sinkType";
import { Tops } from "src/Classes/tops";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SinkService{

    private apiServerUrl = environment.apiBaseUrl + "/sink";

    constructor(private http: HttpClient){}

    public getSinks(): Observable<SinkType[]> {
        return this.http.get<SinkType[]>(`${this.apiServerUrl}/getSinkTypes`)
    }
}