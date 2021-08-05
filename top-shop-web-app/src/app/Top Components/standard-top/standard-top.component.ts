import { Component, OnInit} from '@angular/core';
import { StandardTop } from 'src/Classes/standardTop';

@Component({
  selector: 'app-standard-top',
  templateUrl: './standard-top.component.html',
  styleUrls: ['./standard-top.component.css']
})
export class StandardTopComponent implements OnInit {

  constructor() {
    this.ngOnInit();
   }

  model = new StandardTop();
  capOptions:string[]= ["RAW","CAP","SPL"];
  sinkType:string[] = ["NONE", "DOUBLE BOWL", "SINGLE BOWL", "ROUND", "17\"X 19\" ROUND","CUSTOM"];
  sinkSide:string[] = ["From the left", "From the right"];
  sinkShow:boolean = false;

sinkChange(){
  if(this.model.sinkType != "NONE"){
    this.sinkShow = true;
  }else{
    this.sinkShow = false;
  }
}

  onSubmit(){

  }


  submitted = false;

  updateBox(){

  }
  ngOnInit(): void {
     
  }

  
}
