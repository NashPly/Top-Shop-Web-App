import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order} from "src/Classes/order";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public newOrderList(): Observable<Order> {
        return this.http.get<Order>(`${this.apiServerUrl}/newOrder`)
    }

    public getOrderList(): Observable<Order> {
        return this.http.get<Order>(`${this.apiServerUrl}/getOrder/1`)
    }

    public saveOrderList(order:Order): Observable<number> {
        return this.http.post<number>(`${this.apiServerUrl}/saveOrder`,order)
      }
}