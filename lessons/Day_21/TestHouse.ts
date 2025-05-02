import House from "./HouseWithBuilderDesignPattern";

let builder = new House.builder();
let house = builder.setTopRoofColor("Red")
                    .setWindownNumber(10)
                    .setColor("Blue")
                    .setMaindoorNumber(123)
                    .build();
