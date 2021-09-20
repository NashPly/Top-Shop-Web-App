import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  //private topId!: BehaviorSubject<number[]>
  private topId = new BehaviorSubject([0])
  private routeList = new BehaviorSubject([""])
  //data$ = this.topId.asObservable();
  topId$ = this.topId.asObservable();
  route$ = this.routeList.asObservable();

  getTopId() {
    return this.topId.asObservable()
  }

  changeData(data: number) {
    this.topId.subscribe(value => {
      value.push(data)
      this.topId.next(value)
    })
  }

  getIdList() {
    return this.topId.asObservable()
  }

  setIdList(numList: number[]) {
    this.topId.next(numList)
  }

  getRouteList() {
    return this.routeList.asObservable()
  }

  setRouteList(numList: string[]){
    this.routeList.next(numList)
  }

  addToRouteList(stop: string){
    this.routeList.subscribe(value => {
      value.push(stop)
      this.routeList.next(value)
    })
  }

  constructor() { }
}