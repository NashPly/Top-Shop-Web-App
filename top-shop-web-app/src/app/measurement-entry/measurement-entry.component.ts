import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderSelection } from 'src/Classes/order';

@Component({
  selector: 'app-measurement-entry',
  templateUrl: './measurement-entry.component.html',
  styleUrls: ['./measurement-entry.component.css']
})
export class MeasurementEntryComponent implements OnInit {

  topOrder!: OrderSelection[];
  next: number = 1;
  previous: number = -1;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.topOrder = history.state;
    this.initOpen();
  }

  initOpen() {
    let pathVar = ("app-" + this.topOrder[0].file + "-top")
    this.router.navigate([pathVar], { relativeTo: this.route });
  }

  previousTop() {
    let pathVar = ("app-" + this.topOrder[this.next].file + "-top")
    this.router.navigate([pathVar], { relativeTo: this.route });
    this.next--;
    this.previous--;
  }

  nextTop() {
    let pathVar = ("app-" + this.topOrder[this.next].file + "-top")
    this.router.navigate([pathVar], { relativeTo: this.route });
    this.next++;
    this.previous++;
  }
}
