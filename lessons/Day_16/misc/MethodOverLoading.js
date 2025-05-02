class MethodOverLoading {

    static add(a, b) {
        return a + b;
    }
//     static add(a, b, c) {
//         return a + b + c;
//     }

//Rest parameters
    static add(...args) {
        let sum = 0;
        for (let i = 0; i < args.length; i++) {
            sum += args[i];
        }
        return sum;
    }

}

const result1 = MethodOverLoading.add(1, 2);
const result2 = MethodOverLoading.add(1, 2, 3);
console.log(result1);
console.log(result2);

MethodOverLoading.add(1, 2, 3, 4, 5);