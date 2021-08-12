import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Color } from "src/Classes/color";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ColorService {
    
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getColors(): Observable<Color[]> {
        return this.http.get<Color[]>(`${this.apiServerUrl}/getColors`)
    }
}