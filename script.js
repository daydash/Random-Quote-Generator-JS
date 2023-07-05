const quotes = [
  {
    id: 0,
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
  },
  {
    id: 1,
    quote: "Wake up with determination. Go to bed with satisfaction.",
  },
  {
    id: 2,
    quote: "It's going to be hard, but hard does not mean impossible.",
  },
  {
    id: 3,
    quote: "Dream it. Believe it. Build it.",
  },
  {
    id: 4,
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
  },
  {
    id: 5,
    quote: "Success doesn't just find you. You have to go out and get it.",
  },
  {
    id: 6,
    quote: "Dream it. Wish it. Do it.",
  },
  {
    id: 7,
    quote: "Great things never come from comfort zones.",
  },
  {
    id: 8,
    quote: "Push yourself, because no one else is going to do it for you.",
  },
  {
    id: 9,
    quote: "If you cannot to greate things, do small things in greate way.",
  },
];

const p = document.querySelector("p");
let unusedIds = quotes.map((x) => x.id);
// console.log(unusedIds);

/*
const setQuote = () => {
//   console.log("Clicked");
  if (unusedIds.length !== 0) {
    let id = Math.floor(Math.random() * unusedIds.length);
    // console.log("id -> " + id);
    //   unusedIds.push(id);
    // console.log("element -> " + unusedIds[id]);
    //   console.log(unusedIds);

    p.innerText = quotes[unusedIds[id]].quote;
    unusedIds.splice(id, 1);
    // console.log(unusedIds);
  } else if (unusedIds.length === 0) {
    unusedIds = quotes.map((x) => x.id);
    // console.log("auto again");
    setQuote();
  }
};
*/

const setQuote = () => {
  if (unusedIds.length !== 0) {
    let id = Math.floor(Math.random() * unusedIds.length);
    p.innerText = quotes[unusedIds[id]].quote;
    unusedIds.splice(id, 1);
  } else if (unusedIds.length === 0) {
    unusedIds = quotes.map((x) => x.id);
    setQuote();
  }
};
