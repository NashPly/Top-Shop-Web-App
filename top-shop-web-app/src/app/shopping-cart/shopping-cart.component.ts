import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Order } from 'src/Classes/order';
import { TopPhoto } from 'src/Classes/topPhoto';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartForm = new FormGroup({
    quant0: new FormControl()
  });
  topOrder!: Order;
  topPhoto: TopPhoto[] = [];
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  holder: { [key: number]: any } = [];

  constructor(private router: Router, private orderService: OrderService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getOrderList();
  }

  public getOrderList(): void {

    this.orderService.getOrderList().subscribe(
      (response: Order) => {
        this.topOrder = response;
        this.holder = Object.keys(this.topOrder);

        this.topPhoto = [
          { type: "Standard", file: "Standard", quantity: this.topOrder.id.toString() },
          { type: "Standard Vanity", file: "Standard", quantity: this.topOrder.vanityTop.toString() },
          { type: "Right L Corner", file: "Point_Right_L_Corner", quantity: this.topOrder.rightLCorner.toString() },
          { type: "Left L Corner", file: "Point_Left_L_Corner", quantity: this.topOrder.leftLCorner.toString() },
          { type: "U Shaped", file: "U_Shaped_Legs", quantity: this.topOrder.uShaped.toString() }
        ];
        this.populateFieldInfo();


        let orderList: { [key: string]: any } = this.topOrder
    for (let i = 0; i < this.topPhoto.length; i++) {
      orderList[`${this.holder[i]}`] = this.topPhoto[i].quantity;
    }



      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  populateFieldInfo() {
    this.shoppingCartForm.setControl("id", new FormControl)
    for (let i = 0; i < this.topPhoto.length; i++) {
      this.shoppingCartForm.addControl(`quant${i}`, new FormControl(this.topPhoto[i].quantity));
      this.shoppingCartForm.get(`quant${i}`)?.setValue(this.topPhoto[i].quantity);
    }
  }

  onSubmit() {

    // let orderList: { [key: string]: any } = this.topOrder
    // for (let i = 0; i < this.topPhoto.length; i++) {
    //   orderList[`${this.holder[i]}`] = this.topPhoto[i].quantity;
    // }

    // orderList.array.forEach((element: any) => {
      
    //   console.log(element);
    // });

    this.orderService.saveOrderList(this.topOrder).subscribe(
      (response: number) => {
        //number returns the list ID
        this.router.navigate(['app-measurement-entry']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}