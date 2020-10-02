import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  homeAnimation,
  homeAnimation10,
  homeAnimation11,
  homeAnimation12,
  homeAnimation2,
  homeAnimation3,
  homeAnimation4,
  homeAnimation5,
  homeAnimation6,
  homeAnimation7,
  homeAnimation8,
  homeAnimation9,
} from "../animations/home-animation";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    homeAnimation,
    homeAnimation2,
    homeAnimation3,
    homeAnimation4,
    homeAnimation5,
    homeAnimation6,
    homeAnimation7,
    homeAnimation8,
    homeAnimation9,
    homeAnimation10,
    homeAnimation11,
    homeAnimation12,
    /*trigger("showHide", [
      transition(":enter", [
        style({ transform: "translate(0%, 0%)" }),
        animate("3000ms", style({ transform: "translate(15%, 50%)" })),
      ]),
      transition(":leave", [
        animate("1000ms", style({ transform: "translate(0%, 0%)" })),
      ]),
    ]),*/
  ],
})
export class HomeComponent implements OnInit {
  onAnimationEvent(event: AnimationEvent) {}
  isShown = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isShown = !this.isShown;
  }

  toggle() {
    this.isShown = !this.isShown;
    setTimeout(() => {
      this.router.navigate(["/about"]);
    }, 1300);
  }
}
