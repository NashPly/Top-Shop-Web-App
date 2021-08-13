import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OrderList } from "src/Classes/orderList";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class OrderListService {

    private apiServerUrl = environment.apiBaseUrl + "/list";

    constructor(private http: HttpClient) { }

    public getBlankOrderList(): Observable<OrderList> {
        return this.http.get<OrderList>(`${this.apiServerUrl}/blankOrderList`)
    }

    public getOrderList(): Observable<OrderList> {
        return this.http.get<OrderList>(`${this.apiServerUrl}/getOrder/1`)
    }

    public saveOrderList(order: OrderList): Observable<number> {
        return this.http.put<number>(`${this.apiServerUrl}/save/`, order)
    }
}