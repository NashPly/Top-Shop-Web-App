import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderList } from 'src/Classes/orderList';
import { TopPhoto } from 'src/Classes/topPhoto';
import { Tops } from 'src/Classes/tops';
import { CommonService } from '../service/common.service';
import { OrderListService } from '../service/orderList.service';
import { TopsService } from '../service/tops.service';


@Component({
  selector: 'app-measurement-entry',
  templateUrl: './measurement-entry.component.html',
  styleUrls: ['./measurement-entry.component.css']

})
export class MeasurementEntryComponent implements OnInit {

  topInfo!: Tops;
  pageUrl!: any;
  topPhoto: TopPhoto[] = [];
  topIds: number[] = [0]
  topId!: number;
  tempOrderList!: OrderList
  topRouteList: string[] = []
  //Change in corolation to the previous button disabling
  topIterator: number = 0

  enableNextButton: Boolean = false
  enablePrevButton: Boolean = false

  constructor(private router: Router, private route: ActivatedRoute, private topService: TopsService, private commonService: CommonService, private orderListService: OrderListService) { }

  ngOnInit(): void {
    //Data service
    // this.commonService.getTopId().subscribe(res => this.topIds = res)
    this.commonService.topId$.subscribe(res => this.topIds = res)
    this.commonService.route$.subscribe(res => this.topRouteList = res)
    if(this.topIds[0] == 0) {
      this.topRouteList.splice(0, 1)
    }

    this.pageUrl = history.state.backPage;
    this.topPhoto = history.state.topFiles;

    this.topService.getBlankTop().subscribe(
      (response: Tops) => {
        this.topInfo = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

    //history.state.orderId
    if (true) {
      console.log(history.state.orderId)
      this.orderListService.getOrderListById(70).subscribe(
        (response: OrderList) => {
          this.tempOrderList = response;
          this.createMechanism();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    } else {
      this.onLoadNav()
    }
  }

  nextTop() {
    console.log("next")
    this.commonService.topId$.subscribe(res => console.log(res))
    console.log(this.topIterator)
    this.router.navigate(['redirect'], {
      state: {
        topRouteList: this.topRouteList,
        topIterator: this.topIterator + 1,
        nextTopRoute: this.topRouteList[this.topIterator + 2],
        currentTopRoute: this.topRouteList[this.topIterator + 1],
        prevTopRoute: this.topRouteList[this.topIterator],
        nextTopId: this.topIterator + 2,
        currentTopId: this.topIterator + 1,
        prevTopId: this.topIterator
      }
    });
  }

  previousTop() {
    console.log("previous")
    this.commonService.topId$.subscribe(res => console.log(res))
    this.router.navigate(['redirect'], {
      state: {
        topRouteList: this.topRouteList,
        topIterator: this.topIterator - 1,
        nextTopRoute: this.topRouteList[this.topIterator],
        currentTopRoute: this.topRouteList[this.topIterator - 1],
        prevTopRoute: this.topRouteList[this.topIterator - 2],
        nextTopId: this.topIterator,
        currentTopId: this.topIterator - 1,
        prevTopId: this.topIterator - 2
      }
    });
  }

  receiveUpdate(updatedTop: any) {
    console.log("move");
    this.topInfo = JSON.parse(updatedTop);
  }

  getTopId(id: any) {
    console.log("here")
    console.log(id)
  }

  createMechanism() {
    for (let i = 0; i < this.tempOrderList.kitchenTop; i++) {
      this.topRouteList.push("standard_top")
    }

    for (let i = 0; i < this.tempOrderList.vanityTop; i++) {
      this.topRouteList.push("vanity_top")
    }
    this.onLoadNav()
  }

  onLoadNav() {
    //test to see if I can tell if I'm returning here
    if (history.state.topIterator) {
      //this.commonService.getRouteList().subscribe(res => this.topRouteList = res)
      this.topIterator = history.state.topIterator
      // console.log("onLoadNaV")
      // console.log(this.topIterator)
      // console.log(this.topRouteList)

      this.disableButtons()
      this.router.navigate([this.topRouteList[this.topIterator]], {
        relativeTo: this.route,
        state: {
          topRouteList: this.topRouteList,
          topIterator: this.topIterator,
          nextTopRoute: this.topRouteList[this.topIterator + 1],
          currentTopRoute: this.topRouteList[this.topIterator],
          prevTopRoute: this.topRouteList[this.topIterator - 1],
          nextTopId: this.topIterator + 1,
          currentTopId: this.topIterator,
          prevTopId: this.topIterator - 1
        }
      })
    } else {
      this.disableButtons()
      console.log(this.topRouteList)
      this.router.navigate([this.topRouteList[this.topIterator]], {
        relativeTo: this.route,
        state: {
          topIterator: this.topIterator,
        }
      })
    }
  }

  disableButtons() {
    if (this.topIterator == 0) {
      this.enablePrevButton = true;
    } else {
      this.enablePrevButton = false;
    }

    if (this.topRouteList.length > this.topIterator + 1) {
      this.enableNextButton = false;
    } else {
      this.enableNextButton = true;
    }
  }
}