import { Component, OnInit } from '@angular/core';
import { OrderSelection } from 'src/Classes/order';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  topOrder: OrderSelection[] = [
    { type: "Standard Kitchen", file: "Standard", quantity:"0" },
    { "type": "Standard Vanity", "file": "Standard", "quantity":"0" },
    { "type": "Right L Corner", "file": "Point_Right_L_Corner", "quantity":"0" },
    { "type": "Left L Corner", "file": "Point_Left_L_Corner", "quantity":"0"},
    { "type": "U Shaped", "file": "U_Shaped_Legs", "quantity":"0" }
  ]

  constructor() { 

  }

  

  ngOnInit(): void {
  }

  onSubmit(tO:OrderSelection[] ){
    alert("Success " + tO.length);
    
  }
  //this.name = ["Standard", "Standard", "Right L Corner", "Left L Corner", "U Shaped"]
  //this.file = ["Standard", "Standard", "Point_Right_L_Corner", "Point_Left_L_Corner", "U_Shaped_Legs"]
}
