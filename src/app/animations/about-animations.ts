import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

//color4
export const aboutAnimations = trigger("showHide", [
  state(
    "show",
    style({
      transform: "translate(20%, -100%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("1s")]),
]);

export const aboutAnimations2 = trigger("showHide2", [
  state(
    "show",
    style({
      // Den satte CSS til den tilhørende class er der hvor vi starter - de nedenstående styles er der hvor vi gerne vil hen
      "clip-path": "circle({{endSize}}% at 50% 50%)",
    }),
    { params: { endSize: 6 } }
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("3s ease")]),
  transition(
    "* => show",
    [
      animate(
        "0.2s {{delay}}s",
        keyframes([
          // keyframes definerer hvordan forløbet hen til målet skal foregå - offset er tiden, hvor 0 er start og 1 er slut
          style({ "clip-path": "circle(0% at 50% 50%)", offset: 0 }),
          style({ "clip-path": "circle({{size}}% at 50% 50%)", offset: 1 }),
        ])
      ),
    ],
    { params: { size: "6", delay: "2" } }
  ),
]);

export const aboutAnimations3 = trigger("showHide3", [
  state(
    "show",
    style({
      // Den satte CSS til den tilhørende class er der hvor vi starter - de nedenstående styles er der hvor vi gerne vil hen
      //left: "-43%",
      //top: "-20%",
      //"clip-path": "circle(6% at 50% 50%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [
    animate(
      "3s ease",
      keyframes([
        // keyframes definerer hvordan forløbet hen til målet skal foregå - offset er tiden, hvor 0 er start og 1 er slut
        style({ transform: "scale(0.5)", offset: 0 }),
        style({ transform: "scale(1.2)", offset: 0.5 }),
        style({ transform: "scale(1)", offset: 1 }),
      ])
    ),
  ]),
  transition("* => show", [
    animate(
      "5s ease",
      keyframes([
        // keyframes definerer hvordan forløbet hen til målet skal foregå - offset er tiden, hvor 0 er start og 1 er slut
        style({ transform: "scale(0.5)", offset: 0 }),
        style({ transform: "scale(1.2)", offset: 0.5 }),
        style({ transform: "scale(1)", offset: 1 }),
      ])
    ),
  ]),
]);
