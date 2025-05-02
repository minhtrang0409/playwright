import Animal from "./Animal";

export default class AnimalRacingController {

    getWinner(animalList: Animal[]): Animal {

        let winner = animalList[0];
        for (const animal of animalList) {
            if (winner.getSpeed() < animal.getSpeed()) {
                winner = animal;
            }
        }

    }

}