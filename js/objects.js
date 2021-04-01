(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Dustin ",
        lastName: "Martinez"
    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + this.firstName + this.lastName + "!"
    }
    console.log((person.sayHello()))



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

   shoppers.forEach(function(shopper){
       var shopperName= shopper.name;
       var amountSpent = "$" + shopper.amount.toFixed(2);
       var discount = 0;
       if(shopper.amount > 200) {
           discount = shopper.amount * .12;
       }
       var amountAfterDiscount = shopper.amount - discount;
       var message = shopperName + " spent " + amountSpent + " their discount is " + discount.toFixed(2) + " The amount after discount is " + amountAfterDiscount.toFixed(2);
       console.log(message);
   });

    // shoppers.forEach(function(shopper) {
    //     console.log(shopper.name + " needs to pay $" + shopper.amount.toFixed(2) + " for their groceries." + canHasDiscount(shopper));
    // });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: "Violence, Speed, Momentum: ", authorFirstName:"Dr ", authorLastName:"Disrespect"},
        {title: "The Revenant: ", authorFirstName:"Michael ", authorLastName:"Punke"},
        {title: "The Shining: ", authorFirstName:"Stephen", authorLastName:" King"},
        {title: "Jaws: ", authorFirstName:"Peter", authorLastName:" Benchley"},
        {title: "JAVASCRIPT & JQUERY: ", authorFirstName:"Jon",authorLastName:" Duckett"},
    ]
    console.log(books[0].title + books[0].authorFirstName + books[0].authorLastName);
    console.log(books[1].title + books[1].authorFirstName + books[1].authorLastName);
    console.log(books[2].title + books[2].authorFirstName + books[2].authorLastName);
    console.log(books[3].title + books[3].authorFirstName + books[3].authorLastName);
    console.log(books[4].title + books[4].authorFirstName + books[4].authorLastName);

    // var books = {
    //     title: "Violence, Speed, Momentum",
    //     author: {
    //         firstName: "Dr",
    //         lastName: "Disrespect"
    //     }
    // };

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (var i = 0; i < 5; i++) {
        console.log(books[i].title + books[i].authorFirstName + books[i].authorLastName);
    }

    // books.forEach(function(book, index){
    //     var bookNumber = index + 1;
    //     console.log("Book # " + bookNumber);
    //     console.log("Title: " + book.title);
    // })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     *
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        }
    }
    // books.push(createBook("Code", "Dustin", "Martinez"));





})();
