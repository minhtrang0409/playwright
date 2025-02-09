let nhoi = {
    name: "John",
    age: 20,
    isStudent: true,
    hobbies: ["Reading", "Coding", "Traveling"],
    // Nested Object
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};

//Shallow Copy - handle for nested object
let Nhoi2 = JSON.parse(JSON.stringify(nhoi));
Nhoi2.name = "Nhoi";
Nhoi2.address.city = "Hanoi";

// console.log(nhoi);
// console.log(Nhoi2);

// console.log(Object.keys(nhoi));
// console.log(Object.values(nhoi));

console.log(Object.entries(nhoi));


