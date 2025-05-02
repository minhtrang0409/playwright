import { log } from "console";
import Employee from "./Employee"
export default class FTE extends Employee {
    constructor() {
        super(50*1000);
    }



    setBonus(): void {
        this.bonus = 1*1000;
    }
}

let teo = new FTE();
teo.setBonus();
console.log(teo.getBonus);
