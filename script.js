const quotes = [
  {
    id: 0,
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",

    color: "#068FFF",
  },
  {
    id: 1,
    quote: "Wake up with determination. Go to bed with satisfaction.",
    color: "#000000",
  },
  {
    id: 2,
    quote: "It's going to be hard, but hard does not mean impossible.",
    color: "#F1C93B",
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

    color: "#FF9B9B",
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

const pageUrl = "https://daydash.github.io/Random-Quote-Generator-JS/";

const p = document.querySelector("p");
let unusedIds = quotes.map((x) => x.id);

// Function to compress an image
const compressImage = (url, maxWidth, maxHeight, quality) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      // Check if resizing is required
      if (width > maxWidth || height > maxHeight) {
        const aspectRatio = width / height;

        if (width > maxWidth) {
          width = maxWidth;
          height = width / aspectRatio;
        }

        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      // Compress the image quality
      const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);

      resolve(compressedDataUrl);
    };

    img.onerror = function (error) {
      reject(error);
    };

    img.src = url;
  });
};

const fetchImage = async () => {
  const response = await fetch("https://picsum.photos/v2/list");
  const data = await response.json();

  const id = Math.floor(Math.random() * data.length);

  const imageUrl = data[id].download_url;
  const maxWidth = 800;
  const maxHeight = 600;
  const quality = 0.2;

  compressImage(imageUrl, maxWidth, maxHeight, quality)
    .then((compressedDataUrl) => {
      // Use the compressedDataUrl as needed, e.g., display it on the page
      document.querySelector(
        "body"
      ).style.backgroundImage = `url(${compressedDataUrl})`;
      console.log(compressedDataUrl);
    })
    .catch((error) => {
      console.error(error);
    });

  // document.querySelector(
  //   "body"
  // ).style.backgroundImage = `url(${data[id].download_url})`;
};

const setQuote = async () => {
  fetchImage();
  if (unusedIds.length !== 0) {
    const id = Math.floor(Math.random() * unusedIds.length);
    p.innerText = quotes[unusedIds[id]].quote;
    const currentQuote = encodeURIComponent(quotes[unusedIds[id]].quote);
    // document.querySelector("body").style.background =
    //   quotes[unusedIds[id]].color;
    // document.querySelector(".container").style.background =
    //   quotes[unusedIds[id]].color;

    document.querySelector(
      "#whatsappShareButton"
    ).href = `https://wa.me/?text=${currentQuote}`;
    document.querySelector(
      "#twitterShareButton"
    ).href = `https://twitter.com/intent/tweet?text=${currentQuote}`;
    document.querySelector(
      "#telegramShareButton"
    ).href = `https://t.me/share/url?url=${pageUrl}&text=${currentQuote}`;
    unusedIds.splice(id, 1);
  } else if (unusedIds.length === 0) {
    unusedIds = quotes.map((x) => x.id);
    setQuote();
  }
};
