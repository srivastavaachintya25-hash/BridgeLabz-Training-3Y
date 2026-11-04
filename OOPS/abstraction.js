// Abstraction is used to secure methods

// class Student{
//     #studentID;

//     #getDetails(){
//         console.log(this.#studentID);
//     }
//     commonMethod(){
//         this.#getDetails();
//     }
// }
// const a= new Student();
// a.commonMethod();

class Bank{
    #balance=5000;

    // deposite

    #deposit(amount)
    {
        if(amount>0){
            this.#balance+=amount;
            console.log("Balance is :- "+ this.#balance);
        }else{
            console.log("Please enter valid amount");

        }
    }

    // withdraw

    #withdraw(amount)
    {
        if(amount>0 && amount<=this.#balance){
            this.#balance-=amount;
            console.log("Balance is :- "+ this.#balance);
        }else{
            console.log("Please enter valid amount");

        }
    }

    // getbalance

    #getBalance()
    {
        return this.#balance;
    }

     commonMethod(choice, amount) {
        switch (choice) {
            case 1:
                this.#deposit(amount);
                break;

            case 2:
                this.#withdraw(amount);
                break;

            case 3:
                console.log("Balance is :- " + this.#getBalance());
                break;

            default:
                console.log("Invalid choice");
        }
    }
}

const bank = new Bank();

let choice;
do{
    choice=Number(prompt(

    "---------------------SBI BANK---------------------\n"+
        "1. Bank Deposit\n"+
        "2. Bank Withdraw\n"+
        "3. Get Balance\n"+
        "4. Exit\n"+
    "---------------------------------------------------\n"+
        "Enter your choice :- "
    ));
    switch(choice){
        case 1:
            let amount=Number(prompt("Enter Deposit amount :- "));
            bank.#deposit(amount);
            break;
        case 2:
            let value=Number(prompt("Enter Withdraw amount :- "));
            bank.#withdraw(value);
            break;
        case 3:
            console.log("Balance is :- "+ bank.#getBalance());
            break;
        case 4:
            console.log("Thank you for using our services");
            break;
        
    }
} while(choice!=4);