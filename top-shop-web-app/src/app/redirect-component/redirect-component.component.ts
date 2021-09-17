import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirect-component',
  templateUrl: './redirect-component.component.html',
  styleUrls: ['./redirect-component.component.css']
})
export class RedirectComponentComponent implements OnInit {

  /*
  nextTop!: string;
  currentTop!: string;
  prevTop!: string;
  nextTopId!: number;
  currentTopId!: number;
  prevTopId!: number;
  */
    orderId = history.state.orderId
    topRouteList = history.state.topRouteList
    nextTop = history.state.nextTopRoute
    currentTop = history.state.currentTopRoute
    prevTop = history.state.prevTopRoute
    nextTopId = history.state.nextTopId
    currentTopId = history.state.currentTopId
    prevTopId = history.state.prevTopId

  /*
  this.nextTop = history.state.nextTopRoute
    this.currentTop = history.state.currentTopRoute
    this.prevTop = history.state.prevTopRoute
    this.nextTopId = history.state.nextTopId
    this.currentTopId = history.state.currentTopId
    this.prevTopId = history.state.prevTopId

  */
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.router.navigate(['measurement_entry/standard_top'])

    this.router.navigate(["measurement_entry"], {
      state: {
        topRouteList: this.topRouteList,
        nextTopRoute: this.nextTop,
        currentTopRoute: this.currentTop,
        prevTopRoute: this.prevTop,
        nextTopId: this.nextTopId,
        currentTopId: this.currentTopId,
        prevTopId: this.prevTopId
      }
    })
    /*
    this.router.navigate([`measurement_entry/${this.currentTop}`], {
      state: {
        nextTopRoute: this.nextTop,
        currentTopRoute: this.currentTop,
        prevTopRoute: this.prevTop,
        nextTopId: this.nextTopId,
        currentTopId: this.currentTopId,
        prevTopId: this.prevTopId
      }
    })
    */

  }

}
