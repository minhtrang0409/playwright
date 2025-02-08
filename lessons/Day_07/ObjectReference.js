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
    },
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

//Shallow Copy - handle for nested object
let nhoi2 = nhoi;
nhoi2.name = "Nhoi2";
console.log(nhoi);
console.log(nhoi2);