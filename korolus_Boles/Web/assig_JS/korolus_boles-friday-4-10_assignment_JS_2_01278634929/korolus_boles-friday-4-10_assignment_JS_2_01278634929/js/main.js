
var x = ["The best revenge is massive success. \n" , '4' ,'2'] ;
console.log(x[1]);

var quotes = 
[
    {
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "Do not take life too seriously. You will never get out of it alive.",
      author: "Elbert Hubbard"
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      quote: "So many books, so little time.",
      author: "Frank Zappa"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein"
    },
    {
      quote: "A room without books is like a body without a soul.",
      author: " Marcus Tullius Cicero"
    },
    {
      quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      author: "Bernard M. Baruch"
    },
    {
      quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss"
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West"
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    }
  ];


  function newQuote() 
  {
    const randomIndex = Math.ceil(Math.random() * quotes.length);
    document.getElementById("quote").innerText = `"${quotes[randomIndex].quote}"`;
    document.getElementById("author").innerText = `--${quotes[randomIndex].author}`;
  }
  







