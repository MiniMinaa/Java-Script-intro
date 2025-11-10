//console.log("Hello,world!");
//let age = 24;
//let name = "Mina"; 
//let color = "Purple";

//console.log(`Hello im ${name}. Im ${age} years old and my favourite color is ${color}.`);

//let num1 = 6;
//let num2 = 4;

//console.log(num1 + num2);
//console.log(num1 - num2);
//console.log(num1 * num2);
//console.log(num1 / num2);

//1. Ask the user to enter a price tag using prompt(), for example: $49.99
//let userInput = prompt('Enter a price tag:');

//2. Remove the dollar sign
//let priceNoSign = userInput.replace('$', '');

//3. Convert the input from string to number 
//priceNoSign = Number(priceNoSign)

//4. Reduce the price by 10 percent 
//priceNoSign = 0.9 * priceNoSign;

//5. Print out the new price using console.log(), for example: 'Your new price is: $44.99' 
//console.log("Your new price is: $" + priceNoSign); 

/* function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.includes(' ')){
        return false;
    }
    if (password.includes(username)) {
        return false;
    }
    return true;
}

console.log(isValidPassword("supersecurepassword123abclol", "Mina")); */

/*function guessRandomNumber() {
    let randomNumber = Math.random();
    randomNumber = randomNumber * 10;
    randomNumber = Math.ceil(randomNumber);

    let keepGuessing = true;
    while(keepGuessing) {

        userInput = prompt("Guess a number!");
        if(userInput == randomNumber) {
            keepGuessing = false;
        }
        else if(userInput < randomNumber) {
        alert("Too low");
        }
        else if(userInput > randomNumber) {
        alert("Too high");
        }
    }
}
guessRandomNumber()*/

/*const account = {
    accountName: "Mina",
    balance: 200,
    closed: false,
    getBalance: function() {
        console.log(`current balance: $${this.balance}`);
    },
    deposit: function(amount) {
        if(this.closed){
            this.accountError(`Nah uh this account has been closed`);
        }
        else if(isNaN(amount)) {
            this.accountError(`Nah uh this amount is not a number`);
        }
        else if (amount > 0) {
            this.balance += amount;
            console.log (`Deposited: $${amount}`);
            this.getBalance();
        }
        else {
            this.accountError('Deposit amount must be higher than 0.');
        }
    },
    withdrawal: function(amount) {
        if (this.closed){
            this.accountError(`Nah uh this account has been closed`);
        }
        else if(isNaN(amount)) {
            this.accountError(`Nah uh this amount is not a number`);
        }
        else if (this.balance >= amount && amount > 0) {
            this.balance -= amount;
            console.log (`withdrawal: $${amount}`);
            this.getBalance();
        }
        else {
            this.accountError('withdrawal amount must be lower than balance and withdrawal amout larger than 0.');
        }
    },
    getAccountName: function() {
        console.log(this.accountName);
    },
    accountError: function(errorMsg) {
        console.log(`ERROOOOOR: ${errorMsg}`);
    },
    exitAccount: function() {
       this.balance = NaN; 
       this.accountName = null;
       this.closed = true; 
       console.log(`this account has been closed`) 
    }
}

function atm () {
    const message = parseFloat(
        prompt (
            "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );
    switch (message) {
        case 1:
            account.getBalance();
            break;
        case 2:
            account.deposit(parseFloat(prompt("Choose your deposit amount")));
            break;
        case 3:
            account.withdrawal(parseFloat(prompt("Choose your withdrawal amount")));
            break;
        case 4:
            account.getAccountName();
            break;
        case 5:
            account.exitAccount();
            break;
        default:
            console.log("Select a valid choice!");
    }
}

atm()*/

let library = [];
let running = true;

function addBook(){
    const title = prompt("Enter the book title:");
    const author = prompt("Enter the author");
    const isReadInput = prompt ("Have you read this book? (yes/no").toLowerCase();
    const isRead = isReadInput === "yes";
    
    const newBook = { title, author, isRead };

    library.push(newBook);
    alert(`Book "${title}" added!`);
}

function listBooks() {
    if (library.length === 0) {
        console.log ("Your library is empty!");
        return;
    }
    console.log(`My library has ${library.length} books:`)
    library.forEach(book => {
        console.log(`Title: ${book.title}, author: ${book.author}, already read: ${book.isRead}`);
    });
}  
//const book1 = { title: "if cats disappeared from the world", author: "Genki Kawamura", isRead: true };

function markAsRead(title) {
    const book = library.find(b => b.title.toLowerCase() === title.toLowerCase());
    if (book) {
        book.isRead = true;
        alert(`this book "${book.title}" is marked as read.`);
    } else {
        alert(`book "${title}" not found`);
    }
}
while (running) {
    const choice = parseFloat(prompt(`
        Book Menu
        1. Add Book
        2. List Books
        3. Mark Book as Read
        4. Exit
        Enter your choice: 
    `));

    switch (choice) {
        case 1:
            addBook();
            break;
        case 2:
            listBooks();
            break;
        case 3:
            const title = prompt("Enter the title of the book to mark as read.");
            markAsRead(title);
            break;
        case 4:
            running = false;
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice.");
    }
}
