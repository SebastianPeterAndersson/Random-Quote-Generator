// 'quote' example: "He not busy being born is busy dying".
// 'source' example: "Bob Dylan".
// 'citation' example: "Readers Digest NO 213".(if no information is found, nothing is shown.
// 'year' example: "1994". (if no information is found, nothing is shown.

var quotes = [
    {
        quote : "He not busy being born is busy dying.",
        source : "Bob Dylan",
        citation : "It's Alright, Ma (I'm Only Bleeding).",
        year : 1965,
        category : "Music",
        altCategory : "Inspiring",
        thirdCat : "Geniuses"
    },
    {
        quote : "Everybody in this country should learn how to program a computer. Because it teaches you how to think.",
        source : "Steve Jobs",
        category : "Leaders",
        altCategory : "Inspiring",
        altCategory : "Geniuses",
        thirdCat : "Entrepeneurs"
    },
    {
        quote : "I disapprove of what you say, but I will defend to the death your right to say it.",
        source : "Evelyn Beatrice Hall",
        citation : "The Friends of Voltaire",
        year : 1906,
        category : "Authors"
    },
    {
        quote : "Life is like a box of chocolates, you never know what you're gonna get.",
        source : "Forrest Gump",
        citation : "Forrest Gump",
        year : 1994,
        category : "Movies"
    },
    {
        quote : "Get busy living, or get busy dying.",
        source : "Andy Dufresne",
        citation : "Shawshank Redemption",
        year : 1994,
        category : "Movies"
    },
    {
        quote : "Strive not to be a success, but rather to be of value.",
        source : "Albert Einstein",
        category : "Science",
        altCategory : "Geniuses"
    },
    {
        quote : "What goes up must come down.",
        source : "Isaac Newton",
        category : "Science",
        altCategory : "Geniuses"

    },
    {
        quote : "Darkness is merely the absence of light.",
        source : "Elon Musk - 5 years of age",
        category : "Leaders",
        altCategory : "Geniuses",
        thirdCat : "Entrepeneurs"
    },
    {
        quote : "Wise men speak because they have something to say. Fools speak because they have to say something.",
        source : "Plato",
        category : "Authors"
    },
    {
        quote : "The mind is everything. What you think you become.",
        source : "Buddha",
        category : "Leaders"
    },
    {
        quote : "Eighty percent of success is showing up.",
        source : "Woody Allen",
        category : "Leaders",
        altCategory : "Movies"
    },
    {
        quote : "Whether you think you can or you think you can’t, you’re right.",
        source : "Henry Ford",
        category : "Leaders",
        altCategory : "Entrepeneurs",
        thirdCat : "Inspiring"
    },



];


//Backup array that will hold the array items that have been displayed, until
//every single one have been displayed.
var placeHolder = [];

var colors = [
    '#16a085',
    '#27ae60',
    '#2980b9',
    '#8e44ad',
    '#2c3e50',
    '#7f8c8d',
    '#c0392b',
    '#d35400',
    '#f39c12'
];


// The function within the method let's the eventListener to recieve more functions.
document.getElementById('loadQuote').addEventListener("click", function(){
    printQuote();
    printColor();

    //Clears the time interval on refreshing the quotes, making the
    //user experience more smooth.
    window.clearTimeout(intervalID);
}, false);



//Global variables

var html = "";

//Prints a new object and background color after set amount of time.
var intervalID = window.setInterval(function(){
    printQuote();
    printColor();
}, 10000);

// function clearAlert() {
//   window.clearTimeout(intervalID);
// }



//Generates a random color and stores it in a variable based on how many items are in the colors array,
//then assigning that variable to get the array item randomly.
function changeColor() {
    var randomColorNumber = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomColorNumber];
    return randomColor;
}


//Takes the random hexadecimal value and assigns it to the body element background-color.
function printColor() {
    var randomColor = changeColor();

    var htmlColor = document.getElementsByTagName('BODY')[0];
    htmlColor.style.backgroundColor = randomColor;
    return htmlColor;
}


//Generates a random number from 0 to whatever the number of object in the array is.

 function getRandomQuote () {

    var randomObjectNumber = Math.floor(Math.random() * quotes.length );

    return randomObjectNumber;
}



//Calls the getRandomQuote function and displays the
//randomly selected object to the page.

//Each time an object from the quotes array is being displayed, that
//object gets removed from the array and pushed to the placeHolder array.
//When the quotes array is totally emptied, the array objects in the placeHolder array
//sends all array information to the quotes array. Then emptying the placeHolder array.
function printQuote () {

    var randomObjectNumber = getRandomQuote();


    if (!quotes.length) {
        quotes = quotes.concat(placeHolder);
        placeHolder = [];
    }


        var html = "<p class='quote'>"
        + quotes[randomObjectNumber].quote +
        "</p>";

        html += "<p class='source'>"
        + quotes[randomObjectNumber].source +
        "</p>";
// All if statements in this code does the same thing:
//if there is no object property, display nothing.
        if (quotes[randomObjectNumber].citation !== undefined) {
            html += "<span class='citation'>"
            + quotes[randomObjectNumber].citation +
            "</span>";
        } else {
            html += "";
        }

        if (quotes[randomObjectNumber].year !== undefined) {
            html += "<span class='year'>"
            + quotes[randomObjectNumber].year +
            "</span>";
        } else {
            html += "";
        }

        var category = "<span class='category'>"
        + quotes[randomObjectNumber].category +
        "</span>";

        if (quotes[randomObjectNumber].altCategory !== undefined ) {
            category += "<span class='category'>"
            + quotes[randomObjectNumber].altCategory +
            "</span>";
        }

        if (quotes[randomObjectNumber].thirdCat !== undefined ) {
            category += "<span class='category'>"
            + quotes[randomObjectNumber].thirdCat +
            "</span>";
        }

        if (quotes.length) {
            placeHolder.push(quotes[randomObjectNumber]);
            quotes.splice(randomObjectNumber, 1);

        }
// Created a new
        document.getElementById('quote-box').innerHTML = html;
        document.getElementById('category-container').innerHTML = category;

}
