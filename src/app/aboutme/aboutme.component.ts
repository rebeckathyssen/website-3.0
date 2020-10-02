import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  aboutAnimations,
  aboutAnimations2,
  aboutAnimations3,
} from "../animations/about-animations";

@Component({
  selector: "app-aboutme",
  templateUrl: "./aboutme.component.html",
  styleUrls: ["./aboutme.component.scss"],
  animations: [aboutAnimations, aboutAnimations2, aboutAnimations3],
})
export class AboutmeComponent implements OnInit {
  isShown = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.isShown = !this.isShown;
  }

  toggle() {
    this.isShown = !this.isShown;
  }
}
