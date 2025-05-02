import Employee from "./Employee";

export default class Contractor extends Employee {

    constructor() {
        super(20*1000);
    }

    setBonus(bonus: number) {
        this.bonus = 0.5 * 1000;
    }