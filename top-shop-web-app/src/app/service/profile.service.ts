import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Profile } from "src/Classes/profile";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getProfiles(): Observable<Profile[]> {
        return this.http.get<Profile[]>(`${this.apiServerUrl}/getProfiles`)
    }
}