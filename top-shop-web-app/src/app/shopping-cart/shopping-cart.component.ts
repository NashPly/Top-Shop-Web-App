import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { OrderSelection } from 'src/Classes/order';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  topOrder: OrderSelection[] = [];
  count!: number;
  state!: any;
  holder!: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    // this.holder = this.router.getCurrentNavigation()?.extras.state;
    
    // console.log(this.holder)
  }

  ngOnInit() {

    
    console.log(history.state);
    this.checkIfBack(history.state);
  }

  ngOnChanges(){
    //this.checkIfBack();
  }
  
  checkIfBack(data:any){
    this.holder = Object.keys(data);
    this.count = this.holder.length;
    if(this.count >1){

      console.log("Success")

    }else{
      this.topOrder= [
        { type: "Standard Kitchen", file: "Standard", quantity:"0" },
        { "type": "Standard Vanity", "file": "Standard", quantity:"0" },
        { "type": "Right L Corner", "file": "Point_Right_L_Corner", quantity:"0" },
        { "type": "Left L Corner", "file": "Point_Left_L_Corner", quantity:"0"},
        { "type": "U Shaped", "file": "U_Shaped_Legs", quantity:"0" }
      ]
    }
  }
  onSubmit(){
    this.router.navigate(['app-measurement-entry'], {state: this.topOrder});
  }
  

}