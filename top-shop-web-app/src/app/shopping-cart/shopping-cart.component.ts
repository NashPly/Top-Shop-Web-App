import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { OrderList } from 'src/Classes/orderList';
import { TopPhoto } from 'src/Classes/topPhoto';
import { OrderListService} from '../service/orderList.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  //Used for "back button" navigation
  pageUrl = "shopping_cart";
  shoppingCartForm = new FormGroup({
    quant0: new FormControl()
  });
  topOrder!: OrderList;
  topPhoto: TopPhoto[] = [];
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  holder: { [key: number]: any } = [];

  constructor(private router: Router, private orderListService: OrderListService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getOrderList();
  }

  public getOrderList(): void {

    this.orderListService.getBlankOrderList().subscribe(
      (response: OrderList) => {
        this.topOrder = response;
        this.holder = Object.keys(this.topOrder);

        this.topPhoto = [
          { type: "Standard", file: "Standard", quantity: this.topOrder.kitchenTop},
          { type: "Standard Vanity", file: "Standard", quantity: this.topOrder.vanityTop},
          { type: "Right L Corner", file: "Point_Right_L_Corner", quantity: this.topOrder.rightLCorner},
          { type: "Left L Corner", file: "Point_Left_L_Corner", quantity: this.topOrder.leftLCorner},
          { type: "U Shaped", file: "U_Shaped_Legs", quantity: this.topOrder.uShaped }
        ];
        this.populateFieldInfo();


    //     let orderList: { [key: string]: any } = this.topOrder
    // for (let i = 0; i < this.topPhoto.length; i++) {
    //   orderList[`${this.holder[i]}`] = this.topPhoto[i].quantity;
    // }

    
    
    // this.topOrder.barTop = this.topPhoto[6].quantity;
    // this.topOrder.id = orderList.id;
    // this.topOrder.kitchenTop = orderList.kitchenTop;
    // this.topOrder.vanityTop = orderList.vanityTop;
    // this.topOrder.leftLCorner = orderList.leftLCorner;
    // this.topOrder.rightLCorner = orderList.rightLCorner;
    // this.topOrder.uShaped = orderList.uShaped;
    // this.topOrder.barTop = orderList.barTop;
    
    console.log(this.topOrder);

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
    this.topOrder.kitchenTop = this.topPhoto[0].quantity;
    this.topOrder.vanityTop = this.topPhoto[1].quantity;
    this.topOrder.rightLCorner = this.topPhoto[2].quantity;
    this.topOrder.leftLCorner = this.topPhoto[3].quantity;
    this.topOrder.uShaped = this.topPhoto[4].quantity;

    this.router.navigate(['measurement_entry'],{state: {orderId: this.topOrder.id , topFiles: this.topPhoto, backPage: this.pageUrl}});

    //TODO Remove when ready
    // this.orderListService.saveOrderList(this.topOrder).subscribe(
    //   (response: number) => {
    //     //number returns the list ID
    //     this.router.navigate(['measurement_entry'],{state: {orderId: this.topOrder.id , topFiles: this.topPhoto}});
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // )
  }
}