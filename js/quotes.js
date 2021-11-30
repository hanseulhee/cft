const quotes = [
  {
    quote: "Life is either a great adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "Yesterday you said tomorrow. Just do it.",
    author: "Nike",
  },
  {
    quote: "Being happy never goes out of style.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "Learning to love yourself is the greatest love of all.",
    author: "Michael Masser",
  },
  {
    quote: "The supreme happiness in life is the conviction that we are loved.",
    author: "Victor Hugo",
  },
  {
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle",
  },
  {
    quote: "To fall in love with yourself is the first secret to happiness.",
    author: "Robert Morely",
  },
  {
    quote: "Victory is sweetest when you've known defeat.",
    author: "Malcolm S. Forbes",
  },
  {
    quote: "Where there is no struggle, there is no strength.",
    author: "Oprah Winfrey",
  },
  {
    quote: "The best time to make friends is before you need them",
    author: "Ethel Barrymore",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
