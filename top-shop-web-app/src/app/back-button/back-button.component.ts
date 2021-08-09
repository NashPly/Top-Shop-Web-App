import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderSelection } from 'src/Classes/order';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  constructor(private router: Router) { }

  topOrder!: OrderSelection[];
  holder!: any;
  
  ngOnInit(): void {
    this.holder = history.state;
  }

  onBack(){
    this.router.navigate([''], {state: this.topOrder});
  }
}
