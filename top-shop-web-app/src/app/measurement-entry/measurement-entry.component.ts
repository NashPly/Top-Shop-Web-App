import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderList } from 'src/Classes/orderList';
import { TopPhoto } from 'src/Classes/topPhoto';
import { Tops } from 'src/Classes/tops';
import { CommonService } from '../service/common.service';
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
  topIds: string[] = []
  topId!: string;


  //Temporary hard code data for mechanism
  tempStaticOrderList!: OrderList
  topRouteList: string[] = []
  topIterator = 0
  /*
  next: number = 1;
  previous: number = -1;
  */

  constructor(private router: Router, private route: ActivatedRoute, private topService: TopsService, private commonService: CommonService) { }

  ngOnInit(): void {


    //Data service
    this.commonService.data$.subscribe((res: string) => this.topIds.push)

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


    this.tempStaticOrderList = { id: 1, kitchenTop: 2, vanityTop: 3, barTop: 0, rightLCorner: 0, leftLCorner: 0, uShaped: 0 }

    //test
    this.topRouteList = ["vanity_top", "standard_top", "vanity_top", "vanity_top"]
      console.log(this.topRouteList)
    //Use this in production \/ \/
    //this.createMechanism()


  //test to see if I can tell if I'm returning here
  if(history.state.currentTopRoute){
    this.topIterator = history.state.currentTopId
    this.router.navigate([history.state.currentTopRoute], {
      relativeTo: this.route,
      state: {
        topRouteList: this.topRouteList,
        nextTopRoute: this.topRouteList[this.topIterator + 1],
        currentTopRoute: this.topRouteList[this.topIterator],
        prevTopRoute: this.topRouteList[this.topIterator-1],
        nextTopId: this.topIterator + 1,
        currentTopId: this.topIterator,
        prevTopId: this.topIterator - 1
      }
    })
  } else{
    this.router.navigate([this.topRouteList[this.topIterator]], { relativeTo: this.route })
  }
  
    

    
    
    //this.router.navigate(['standard_top'], { state: { topFiles: this.topPhoto, backPage: this.pageUrl }, relativeTo: this.route });
  }



  nextTop() {
    console.log("next")
    console.log(this.topIterator + 1)
    this.router.navigate(['redirect'], {
      state: {
        topRouteList: this.topRouteList,
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
    this.router.navigate(['redirect'], {
      state: {
        topRouteList: this.topRouteList,
        nextTopRoute: this.topRouteList[this.topIterator],
        currentTopRoute: this.topRouteList[this.topIterator -1],
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

  public getTopId(id: any): void {
    console.log("here")
    console.log(id)
  }

  createMechanism() {
    for (let i = 0; i < this.tempStaticOrderList.kitchenTop; i++) {
      this.topRouteList.push("standard_top")
    }

    for (let i = 0; i < this.tempStaticOrderList.vanityTop; i++) {
      this.topRouteList.push("vanity_top")
    }

    console.log(this.topRouteList)
  }
}
