export default class HouseWithBuilderDesignPattern {

    private topRoofColor: string;
    private windownNumber: number;
    private color: string;
    private maindoorNumber: number;

    private constructor(){

    }
    //Getter
    getTopRoofColor(): string {
        return this.topRoofColor;
    }
    getWindownNumber(): number {
        return this.windownNumber;
    }

    getColor(): string {
        return this.color;
    }

    getMaindoorNumber(): number {
        return this.maindoorNumber
    }


    public static builder = class {
        private house: HouseWithBuilderDesignPattern;

        public setTopRoofColor(topRoofColor: string): this {
            this.house.topRoofColor = topRoofColor;
            return this;
        }
        public setWindownNumber(windownNumber: number): this {
            this.house.windownNumber = windownNumber;
            return this;
        }
        public setColor(color: string): this {
            this.house.color = color;
            return this;
        }
        public setMaindoorNumber(maindoorNumber: number): this {
            this.house.maindoorNumber = maindoorNumber;
            return this;
        }
        public build(): HouseWithBuilderDesignPattern {
            return this.house;
        }
    } 

}