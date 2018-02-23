

const qoutes = [
    {
        qoute: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        source: "Michael Jordan",
        year: 1988,
    
    },
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
//create random number
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 6 ) - 1 
    return randomNumber
}
const number = getRandomNumber();

//get the random number's qoute from object
for (var key in qoutes) {
    if (number == key ) {
        var qoute = qoutes[key].qoute;
       
        console.log (qoute);
    }
};




// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

