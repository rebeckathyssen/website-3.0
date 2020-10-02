import { Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./route-animation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = "rebecka";

  constructor(private router: Router) {}
}
