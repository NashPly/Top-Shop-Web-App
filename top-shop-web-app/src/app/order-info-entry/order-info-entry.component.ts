import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/Classes/color';
import { Finish } from 'src/Classes/finish';
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

  profiles: Profile[] = [];
  finishes: Finish[] = [];
  colors: Color[] = [];
  order!: Orders;

  constructor(private orderService: OrderService,private profileService: ProfileService, private finishService: FinishService, private colorService: ColorService) { }

  ngOnInit(): void {

    this.orderService.getBlankOrder().subscribe(
      (response:Orders) => {
        this.order = response;
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    )
      this.profileService.getProfiles().subscribe(
        (response:Profile[]) => {
          this.profiles = response;
        },
        (error: HttpErrorResponse)=> {
          alert(error.message);
        }
      )

      this.finishService.getFinishes().subscribe(
        (response:Finish[]) => {
          this.finishes = response;
        },
        (error: HttpErrorResponse)=> {
          alert(error.message);
        }
      )
      this.colorService.getColors().subscribe(
        (response:Color[]) => {
          this.colors = response;
        },
        (error: HttpErrorResponse)=> {
          alert(error.message);
        }
      )
  
  }

  submitForm(){
    console.log(this.order)

    this.orderService.saveOrder(this.order).subscribe(
      (response:void)=>{

      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    )
  }

}
