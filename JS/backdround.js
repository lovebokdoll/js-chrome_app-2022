const images = [
  "wallpaperbetter (1).jpg",
  "wallpaperbetter (2).jpg",
  "wallpaperbetter (3).jpg",
  "wallpaperbetter (4).jpg",
  "wallpaperbetter .jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
