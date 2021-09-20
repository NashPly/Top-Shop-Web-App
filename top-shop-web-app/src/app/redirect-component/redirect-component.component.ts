import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirect-component',
  templateUrl: './redirect-component.component.html',
  styleUrls: ['./redirect-component.component.css']
})
export class RedirectComponentComponent implements OnInit {

  topRouteList = history.state.topRouteList
  topIterator =  history.state.topIterator
  nextTop = history.state.nextTopRoute
  currentTop = history.state.currentTopRoute
  prevTop = history.state.prevTopRoute
  nextTopId = history.state.nextTopId
  currentTopId = history.state.currentTopId
  prevTopId = history.state.prevTopId

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.navigate(["measurement_entry"], {
      state: {
        
        topRouteList: this.topRouteList,
        topIterator: this.topIterator,
        nextTopRoute: this.nextTop,
        currentTopRoute: this.currentTop,
        prevTopRoute: this.prevTop,
        nextTopId: this.nextTopId,
        currentTopId: this.currentTopId,
        prevTopId: this.prevTopId
      }
    })

  }

}
