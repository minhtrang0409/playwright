const readline = require('readline-sync')


// DB

// {
//     accountNumber: String,
//     routingNumber: String,
//     balance: Number
// }
const accountA = {
    accountName: "Nhoi",
    accountNumber: "123456789",
    routingNumber: "987654321",
    balance: 1000
}
const accountB = JSON.parse(JSON.stringify(accountA));
accountB.accountNumber = "987654321";
accountB.balance = 2000;
accountB.routingNumber = "5656";
accountB.accountName = "Nhoi2";


const accounts = [accountA, accountB];
// Program interface

bankApp();

//Support functions
function bankApp() {

    while (isInteracting) {
        printMenu();
        let option = getUserOption();
        switch (option) {
            case 1:
                const foundAccount = findAcount();
                if (foundAccount) {
                    console.log(foundAccount);
                    const { accountNumber, balance } = foundAccount;
                    console.log(`Account number: ${accountNumber}, balance: ${balance}`);
                } else {
                    console.log("Account not found");
                }
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false;
                break;
            default:
                console.log("Invalid option");
        }
    }
    console.log("Thank you for using our service");
}
function getUserOption() {
    let option = Number(readline.question("Enter your option: "));
    return option;
}

function printMenu() {
    console.log(`
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
`);
}

function findAcount() {
    let foundAccount = {};
    let inputAccountNumber = readline.question("Enter account number: ");
    for (const account of accounts) {
        if (account.accountNumber === inputAccountNumber) {
            foundAccount = account;
            break;
        }
    }
    return foundAccount;
}

function updateBalance() {
    const MAX_ALLOWED_ATTEMPTS = 3;
    let attemps = 0;
    do {
        const foundAccount = findAcount();
        const isNotFound = foundAccount.accountNumber == undefined;
        if (isNotFound) {
            console.log(`Attempts left: ${MAX_ALLOWED_ATTEMPTS - attemps}`);
            attemps++;
        } else {
            //Logic to update balance and exit the function
            const {balance} = foundAccount;
            console.log(`Your current balance is ${balance}`);
            const expectedWithdraw = Number(readline.question("Enter the amount you want to withdraw: "));
            if (expectedWithdraw > balance) {
                console.log("Insufficient balance");
            } else {
                foundAccount.balance = balance - expectedWithdraw;
                console.log(`Your new balance is ${foundAccount.balance}`);
                attemps = MAX_ALLOWED_ATTEMPTS;
            
        }
    }

    } while (attemps < MAX_ALLOWED_ATTEMPTS);

}



function isInteracting() {
    return true;
}