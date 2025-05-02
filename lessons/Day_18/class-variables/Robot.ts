export default class Robot {
    static id = 0;

    constructor() {
        Robot.id++;
    }

    getId() {
        return Robot.id;
    }
}
const Lulu = new Robot();
console.log(Lulu.getId());

const Lulu2 = new Robot();
console.log(Lulu2.getId());