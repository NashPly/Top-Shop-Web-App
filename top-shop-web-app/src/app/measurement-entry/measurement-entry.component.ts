import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopPhoto } from 'src/Classes/topPhoto';
import { Tops } from 'src/Classes/tops';
import { CommonService } from '../service/common.service';
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
  topIds: string [] = []
  next: number = 1;
  previous: number = -1;
  topId!: string;

  constructor(private router: Router, private route: ActivatedRoute, private topService: TopsService, private commonService: CommonService) {}

  ngOnInit(): void {

    //Data service
    this.commonService.data$.subscribe( (res: string) => this.topIds.push)

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

  public getTopId(id : any): void{
    console.log("here")
    console.log(id)
  }
}
