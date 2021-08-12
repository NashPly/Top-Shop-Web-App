import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Orders } from "src/Classes/orders";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    
    private apiServerUrl = environment.apiBaseUrl + "/order";

    constructor(private http: HttpClient){}

    public getBlankOrder(): Observable<Orders> {
        return this.http.get<Orders>(`${this.apiServerUrl}/blankOrder`)
    }

    public getOrder(): Observable<Orders> {
        return this.http.get<Orders>(`${this.apiServerUrl}/getOrder/1`)
    }

    public saveOrder(order:Orders): Observable<void> {
        return this.http.post<void>(`${this.apiServerUrl}/save/`,order)
      }
}