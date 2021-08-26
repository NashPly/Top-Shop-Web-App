import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopPhoto } from 'src/Classes/topPhoto';
import { Tops } from 'src/Classes/tops';
import { TopsService } from '../service/tops.service';


@Component({
  selector: 'app-measurement-entry',
  templateUrl: './measurement-entry.component.html',
  styleUrls: ['./measurement-entry.component.css']
  
})
export class MeasurementEntryComponent implements OnInit {

  topInfo! : Tops;
  pageUrl!: any;
  topPhoto: TopPhoto[] = [];
  next: number = 1;
  previous: number = -1;

  constructor(private router: Router, private route: ActivatedRoute, private topService: TopsService) {}

  ngOnInit(): void {

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
    this.router.navigate(['standard_top'], {state:{topFiles: this.topPhoto, backPage: this.pageUrl}, relativeTo: this.route});
    // this.topPhoto = [
    //   { type: "Standard", file: "Standard" },
    //   { type: "Standard Vanity", file: "Standard" },
    //   { type: "Right L Corner", file: "Point_Right_L_Corner" },
    //   { type: "Left L Corner", file: "Point_Left_L_Corner" },
    //   { type: "U Shaped", file: "U_Shaped_Legs" }
    // ];
    //this.initOpen();
  }

  initOpen() {
    // let pathVar = ("app-" + this.topPhoto[0].file + "-top")
    // this.router.navigate([pathVar], { relativeTo: this.route });
  }

  previousTop() {
    // let pathVar = ("app-" + this.topPhoto[this.next].file + "-top")
    // this.router.navigate([pathVar], { relativeTo: this.route });
    // this.next--;
    // this.previous--;
  }

  nextTop() {
    console.log(this.topInfo)
    // let pathVar = ("app-" + this.topPhoto[this.next].file + "-top")
    // this.router.navigate([pathVar], { relativeTo: this.route });
    // this.next++;
    // this.previous++;
  }

  receiveUpdate(updatedTop: any){
    console.log("move");
    this.topInfo = JSON.parse(updatedTop);
  }
}
