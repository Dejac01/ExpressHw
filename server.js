// Load express
const express = require("express");

// Create our express app
const app = express();
const PORT = 3000;

// Greeting

app.get('/greeting', (req, res) =>{
    res.send('<h1>Hello Stranger!</h1>');
    });

    app.get('/greeting/:name', (req, res) => {
        const name = req.params.name;
        res.send(`Hello, ${name}!`);
      });
      
// Tip Calculator

      app.get('/tip/:total/:tipPercentage', (req, res) => {
        const total = parseFloat(req.params.total);
        const tipPercentage = parseFloat(req.params.tipPercentage);
        const tip = (total * tipPercentage) / 100;
        res.send(`Your tip will be: ${tip.toFixed(2)}`);
      });
      
// 8 ball 

const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful"
  ];

  //route

  app.get('/magic/:question', (req, res) => {

    // // Get the question from the URL
    const question = req.params.question;

 // random Magic 8 ball response with math random
    const response = responses[Math.floor(Math.random() * responses.length)];

    // Send the request and response back 
    res.send(`<h1>${question}</h1><p>${response}</p>`);
  });


// 99 bottles



// Home page route
app.get('/', (req, res) => {
  res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">take one down, pass it around</a>
  `);
});

// Route with parameter for the number of bottles left
app.get('/:numBottles', (req, res) => {
  const numBottles = req.params.numBottles;

  // show a "Start Over" link instead of "take one down" if 0 left
  const takeOneDownLink = numBottles > 0 ? `<a href="/${numBottles - 1}">take one down, pass it around</a>` : `<a href="/">Start Over</a>`;

  res.send(`
    <h1>${numBottles} Bottles of beer on the wall.</h1>
    ${takeOneDownLink}
  `);
});





  
app.listen(PORT, () => {
        console.log("CurrentlyListening on Port ${PORT}");
      });

      