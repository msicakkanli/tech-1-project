// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

const qoutes = [
  
    {
        qoute: "Every strike brings me closer to the next home run.",
        source:  "Babe Ruth",
        year: 2005,
        citation: "New York"
    
    },
    {
        qoute: "Life is 10% what happens to me and 90% of how I react to it",
        source: "Charles Swindoll",
        citation:"London"
    
    },
    {
        qoute: "Eighty percent of success is showing up.",
        source: "Woody Allen",
        citation:"Paris"
    
    },
    {
        qoute: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        source:  "Christopher Columbus",
        
    },
    {
        qoute: "Definiteness of purpose is the starting point of all achievement.",
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


//create random number and select qoute for that number after that create random qoute object

function getRandomQoute(){
    let number = getRandomNumber(); 
    for (var key in qoutes) {
        if (number == key ) {
            var qoute = qoutes[key].qoute;
            var source = qoutes[key].source;
            var citation = qoutes[key].citation;
            var year = qoutes[key].year;
           
            randomQoute = {};
            randomQoute.qoute = qoute;
            randomQoute.source = source;
            randomQoute.citation = citation;
            randomQoute.year = year;
             
        }
    };
    return randomQoute;
    }

//print random qoute to web site
function printQuote() {
    let message = ""
    let finalQoute =  getRandomQoute();
    let outputDiv = document.getElementById("quote-box");
    
    for (let i=0; i<finalQoute.lenght; i ++) {
        message = finalQoute.qoute 
    }
    outputDiv.innerHTML = message
    console.log(message);
    console.log(finalQoute.qoute);
}




document.getElementById('loadQuote').addEventListener("click", printQuote, false);


