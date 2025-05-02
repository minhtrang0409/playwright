import AnimalRacingController from "./AnimalRacingController";
import Tiger from "./Tiger";

let tiger = new Tiger("MeoMeo");
let tiger2 = new Tiger("MeoMeo2");

const winner = AnimalRacingController.getWinner([tiger,tiger2]);
console.log(`Winner is ${winner.getName()}`);
