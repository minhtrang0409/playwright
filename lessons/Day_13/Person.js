
// WebDriver Protocol: Selenium, Appium, WebDriverIO
// Devtool Protocol: Chrome Devtool Protocol, Cypress, Playwright, Puppeteer



class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    // Getter
    get name(){
        return this._name;
    }

    // Setter
    set name(newName){
        this._name = newName;
    }
}

let teo = new Person(); 
teo.name = "Minh Trang" // Invoke the constructor to initialize the object from the class
let name = teo.name();
console.log(name);