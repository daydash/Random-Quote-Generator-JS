const quotes = [
  {
    id: 0,
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",

    color: "#19d480",
  },
  {
    id: 1,
    quote: "Wake up with determination. Go to bed with satisfaction.",
    color: "#000000",
  },
  {
    id: 2,
    quote: "It's going to be hard, but hard does not mean impossible.",
    color: "#5bfacd",
  },
  {
    id: 3,
    quote: "Dream it. Believe it. Build it.",
    color: "#7346f5",
  },
  {
    id: 4,
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",

    color: "#34f201",
  },
  {
    id: 5,
    quote: "Success doesn't just find you. You have to go out and get it.",
    color: "#f93f7f",
  },
  {
    id: 6,
    quote: "Dream it. Wish it. Do it.",
    color: "#638cad",
  },
  {
    id: 7,
    quote: "Great things never come from comfort zones.",
    color: "#110e41",
  },
  {
    id: 8,
    quote: "Push yourself, because no one else is going to do it for you.",
    color: "#cc6c46",
  },
  {
    id: 9,
    quote: "If you cannot to greate things, do small things in greate way.",
    color: "#dd81f4",
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
    document.querySelector("body").style.background =
      quotes[unusedIds[id]].color;
    document.querySelector(".container").style.background =
      quotes[unusedIds[id]].color;
    document.querySelector("#whatsapp-link").href = `https://wa.me/?text=${
      quotes[unusedIds[id]].quote
    }`;
    unusedIds.splice(id, 1);
  } else if (unusedIds.length === 0) {
    unusedIds = quotes.map((x) => x.id);
    setQuote();
  }
};

// data-action="share/whatsapp/share"
//         target="_blank"
