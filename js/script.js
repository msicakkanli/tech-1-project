// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

const quotes = [
  
    {
        quote: "Every strike brings me closer to the next home run.",
        source:  "Babe Ruth",
        year: 2005,
        citation: "New York"
    
    },
    {
        quote: "Life is 10% what happens to me and 90% of how I react to it",
        source: "Charles Swindoll",
        year: 2010,
        citation:"London"
    
    },
    {
        quote: "Eighty percent of success is showing up.",
        source: "Woody Allen",
        
        citation:"Paris"
    
    },
    {
        quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        
        source:  "Christopher Columbus",
        
    },
    {
        quote: "Definiteness of purpose is the starting point of all achievement.",
        source: "W. Clement Stone",
        
        citation:"Rome"
    
    }
    
]
//create random number function
function getRandomNumber() {

    let randomNumber = Math.floor(Math.random() * 5 )
    console.log(randomNumber);
    return randomNumber
}


//create random number and select quote for that number after that create random quote object

function getRandomQuote(){
    let number = getRandomNumber(); 
    for (var key in quotes) {
        if (number == key ) {
            var quote = quotes[key].quote;
            var source = quotes[key].source;
            var citation = quotes[key].citation;
            var year = quotes[key].year;
           
            randomQuote = {};
            randomQuote.quote = quote;
            randomQuote.source = source;
            randomQuote.citation = citation;
            randomQuote.year = year;
             
        }
    };
    return randomQuote;
    }

//print random quote to web site
function printQuote() {
    let finalQuote =  getRandomQuote();
    console.log (finalQuote);
    const lastQuote = document.querySelector('.quote');
    lastQuote.innerHTML = `${finalQuote.quote}`;
    const lastSource = document.querySelector('.source');
    lastSource.innerHTML = finalQuote.source  
    if (finalQuote.citation != undefined) { 
    lastSource.innerHTML += '<span  class="citation">' +finalQuote.citation + '</span>' }
    if (finalQuote.year != undefined) { 
    lastSource.innerHTML +=  '<span  class="year">' + finalQuote.year+ '</span>'
    };
}





document.getElementById('loadQuote').addEventListener("click", printQuote, false);


