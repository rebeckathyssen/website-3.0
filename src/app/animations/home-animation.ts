import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

//// 1

export const homeAnimation = trigger("showHide", [
  state(
    "show",
    style({
      transform: "translate(15%, 50%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("2s ease")]),
]);

////// 4

export const homeAnimation2 = trigger("showHide2", [
  state(
    "show",
    style({
      transform: "translate(0%, -100%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("1s ease")]),
]);

////// 3

export const homeAnimation3 = trigger("showHide3", [
  state(
    "show",
    style({
      transform: "translate(-15%, 50%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("2s ease")]),
]);

////// 2

export const homeAnimation4 = trigger("showHide4", [
  state(
    "show",
    style({
      transform: "translate(0%, -67%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("2s ease")]),
]);

////// 3b

export const homeAnimation5 = trigger("showHide5", [
  state(
    "show",
    style({
      transform: "translate(-15%, -50%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("2s ease")]),
]);

////// 2b

export const homeAnimation6 = trigger("showHide6", [
  state(
    "show",
    style({
      transform: "translate(0%, 350%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("2s ease")]),
]);

////// 1b

export const homeAnimation7 = trigger("showHide7", [
  state(
    "show",
    style({
      transform: "translate(15%, -50%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("2s ease")]),
]);

////// 1c

export const homeAnimation8 = trigger("showHide8", [
  state(
    "show",
    style({
      transform: "translate(-15%, -48%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("2s ease")]),
]);

////// 1d

export const homeAnimation9 = trigger("showHide9", [
  state(
    "show",
    style({
      transform: "translate(15%, 43%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("2s ease")]),
]);

////// name

export const homeAnimation10 = trigger("showHide10", [
  state(
    "show",
    style({
      transform: "translate(225%, 185%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("2.5s ease")]),
]);

////// content

export const homeAnimation11 = trigger("showHide11", [
  state(
    "show",
    style({
      transform: "translate(211%, -120%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("2.1s ease")]),
]);

////// learn more

export const homeAnimation12 = trigger("showHide12", [
  state(
    "show",
    style({
      transform: "translate(0%, -300%)",
    })
  ),
  state(
    "hide",
    style({
      transform: "translate(0%, 0%)",
    })
  ),
  transition("show => *", [animate("1s")]),
  transition("* => show", [animate("2s ease")]),
]);
