import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StandardTop } from 'src/Classes/standardTop';
import { StandardTopService } from './service/standardTop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'top-shop-web-app';

  public standardTops: StandardTop[] = [];

  constructor(private standardTopService: StandardTopService){

  }
  ngOnInit(): void {
    this.getStandardTops();
  }

  public getStandardTops(): void{
    this.standardTopService.getStandardTops().subscribe(
      (response:StandardTop[]) => {
        this.standardTops = response;
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    )
  }


}
