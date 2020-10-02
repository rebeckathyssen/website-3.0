import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("Home => *", [
    query(":enter, :leave", animateChild()),
    style({ position: "fixed", width: "100%" }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(100%)" }),
          animate("5s ease-in-out", style({ transform: "translateX(0%)" })), // about enter
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("5s ease-in-out", style({ transform: "translateX(-100%)" })), // home leave
        ],
        { optional: true }
      ),
    ]),
  ]),

  transition("About => Home", [
    query(":enter, :leave", animateChild()),
    style({ position: "absolute", width: "100%" }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(-100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" })), // home enter
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(100%)" })), // about leave
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
