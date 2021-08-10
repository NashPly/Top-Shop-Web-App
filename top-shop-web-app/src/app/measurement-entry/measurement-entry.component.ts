import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/Classes/order';
import { TopPhoto } from 'src/Classes/topPhoto';

@Component({
  selector: 'app-measurement-entry',
  templateUrl: './measurement-entry.component.html',
  styleUrls: ['./measurement-entry.component.css']
})
export class MeasurementEntryComponent implements OnInit {

  topPhoto: TopPhoto[] = [];
  next: number = 1;
  previous: number = -1;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.topPhoto = [
    //   { type: "Standard", file: "Standard" },
    //   { type: "Standard Vanity", file: "Standard" },
    //   { type: "Right L Corner", file: "Point_Right_L_Corner" },
    //   { type: "Left L Corner", file: "Point_Left_L_Corner" },
    //   { type: "U Shaped", file: "U_Shaped_Legs" }
    // ];
    this.initOpen();
  }

  initOpen() {
    let pathVar = ("app-" + this.topPhoto[0].file + "-top")
    this.router.navigate([pathVar], { relativeTo: this.route });
  }

  previousTop() {
    let pathVar = ("app-" + this.topPhoto[this.next].file + "-top")
    this.router.navigate([pathVar], { relativeTo: this.route });
    this.next--;
    this.previous--;
  }

  nextTop() {
    let pathVar = ("app-" + this.topPhoto[this.next].file + "-top")
    this.router.navigate([pathVar], { relativeTo: this.route });
    this.next++;
    this.previous++;
  }
}
