import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'src/Classes/color';
import { createFinish, Finish } from 'src/Classes/finish';
import { Orders } from 'src/Classes/orders';
import { Profile } from 'src/Classes/profile';
import { ColorService } from '../service/color.service';
import { FinishService } from '../service/finish.service';
import { OrderService } from '../service/order.service';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-order-info-entry',
  templateUrl: './order-info-entry.component.html',
  styleUrls: ['./order-info-entry.component.css']
})
export class OrderInfoEntryComponent implements OnInit {

  pageUrl = "";
  profiles: Profile[] = [];
  finishes: Finish[] = [];
  colors: Color[] = [];
  order!: Orders;

  constructor(private router: Router, private orderService: OrderService, private profileService: ProfileService, private finishService: FinishService, private colorService: ColorService) { }

  ngOnInit(): void {

    this.orderService.getBlankOrder().subscribe(
      (response: Orders) => {
        this.order = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    this.profileService.getProfiles().subscribe(
      (response: Profile[]) => {
        this.profiles = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

    this.finishService.getFinishes().subscribe(
      (response: Finish[]) => {
        this.finishes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    this.colorService.getColors().subscribe(
      (response: Color[]) => {
        this.colors = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }

  submitForm() {
    this.router.navigate(['shopping_list'], {state: {backPage:this.pageUrl}});
    //TODO un comment this when ready
    // this.orderService.saveOrder(this.order).subscribe(
    //   (response:void)=>{

    //     this.router.navigate(['shopping_list']);
    //   },
    //   (error: HttpErrorResponse)=> {
    //     alert(error.message);
    //   }
    // )
  }

}
