export default class House {


    private roofColor: string;
    private windownNumber: number;
    private color: string;
    private maindoorNumber: number;

    constructor(roofColor: string, windownNumber: number, color: string, maindoorNumber: number) {
        this.roofColor = roofColor;
        this.windownNumber = windownNumber;
        this.color = color;
        this.maindoorNumber = maindoorNumber;
}

//Getter
    getRoofColor(): string {
        return this.roofColor;
    }

    getWindownNumber(): number {
        return this.windownNumber;
    }

    getColor(): string {
        return this.color;
    }

    getMaindoorNumber(): number {
        return this.maindoorNumber;
    }
}

let teoHouse = new House("Red", 10, "Blue", 123);
let tiHouse = new House("Yellow", 15, "White", 456);
