#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000; //DOLLAR
let pinCode = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number"
    }
]);
if (pinAnswer.pin === pinCode) {
    console.log("correct");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountans.amount > balance) {
            console.log("Insufficient funds. Your balance is not enough for this transaction.");
        }
        else {
            balance -= amountans.amount;
            console.log(`your balance is ${balance}`);
        }
    }
    //this is a homework to add a insufficient amount code 
    if (operationAnswer.operation === "check balance") {
        console.log("DEAR CUSTOMER YOUR CURRENT BALANCE IS" + " " + balance);
    }
}
else {
    console.log("incorrect");
}
console.log("THANKS TO ABDULLAH KASHIF");
