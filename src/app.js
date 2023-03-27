let vulgarList = [
  "fuck",
  "fuck you",
  "fuck off",
  "shit",
  "piss off",
  "dick head",
  "asshole",
  "son of a bitch",
  "bastard",
  "bitch",
  "damn",
  "cunt",
];
let myRandom = {
  adjective: [
    "bright",
    "sweet",
    "brave",
    "cute",
    "funny",
    "sneaky",
    "stupid",
    "awesome",
  ],
  nationality: [
    "Greek",
    "Ukrainian",
    "Polish",
    "Turkish",
    "Brazilian",
    "Spanish",
    "Egyptian",
    "Japanese",
  ],
  person: [
    "Daemon",
    "Potter",
    "Gaga",
    "Buddha",
    "Santa",
    "Biden",
    "Mickey",
    "Rachel",
  ],
  noun: [
    "doll",
    "cat",
    "house",
    "book",
    "plane",
    "ticket",
    "concert",
    "flower",
  ],
  pluralNoun: [
    "tables",
    "lamps",
    "carpets",
    "cars",
    "trees",
    "theatres",
    "toys",
    "benches",
  ],
  _number: ["2", "500", "100", "20", "1000000", "1000", "50", "30"],
  shapes: [
    "starts",
    "squares",
    "circles",
    "diamonds",
    "rectangles",
    "ovals",
    "zigzags",
    "hearts",
  ],
  food: [
    "octopus",
    "strawberry",
    "broccoli",
    "carrot",
    "ice-cream",
    "bubble-gum",
    "jam",
    "cherry",
  ],
};
let buttonMad = document.getElementById("buttonMad");
buttonMad.addEventListener("click", goMad);
let inputValues = [];

function goMad(event) {
  event.preventDefault();

  let inputElements = document.getElementsByTagName("input");
  let inputPromises = [];

  for (var i = 0; i < inputElements.length; i++) {
    let currentInput = inputElements[i];
    let elementValue = currentInput.value;

    if (elementValue) {
      for (var j = 0; j < vulgarList.length; j++) {
        if (elementValue.toLowerCase().trim() == vulgarList[j]) {
          currentInput.value = "";

          currentInput.setAttribute("placeholder", "No vulgar!");
          break;
        }
      }
      inputPromises.push(Promise.resolve(elementValue));
    } else {
      inputElements[i].setAttribute("placeholder", "Word!");
      inputPromises.push(Promise.reject());
    }
  }

  Promise.allSettled(inputPromises).then((results) => {
    if (results.every((result) => result.status === "fulfilled")) {
      const inputValues = results.map((result) => result.value);
      showStory(inputValues);
    }
  });
}

function showStory(values) {
  let secondaryWrapper = document.getElementById("secondaryWrapper");
  secondaryWrapper.innerHTML = "";

  let newParagraph = document.createElement("p");
  newParagraph.setAttribute(
    "style",
    "font-size: 1.5rem; line-height: 1.5; background-color: white; text-align: justify; padding: 2rem; color: rgb(238, 77, 48); border-radius: 1rem;"
  );
  newParagraph.innerHTML =
    "Pizza was invented by <span>adjective</span> <span>nationality</span> chef named <span>person</span>. To make a pizza you need to take a lump of <span>noun</span>, and make a thin, round <span>adjective</span> <span>noun</span>. Then you cover it with <span>adjective</span> sauce, <span>adjective</span> cheese, and fresh chopped <span>plural noun</span>. Next you need to bake it in a very hot <span>noun</span>. When it is done, cut it into <span>number</span> <span>shapes</span>. Some kids like <span>food</span> pizza the best, but my favourite is <span>food</span>. If I could, I would eat pizza <span>number</span> times a day!";

  secondaryWrapper.appendChild(newParagraph);

  let spanInput = newParagraph.querySelectorAll("span");
  spanInput.forEach((span) => {
    span.style.color = "rgb(119, 197, 35)";
  });

  for (var i = 0; i < spanInput.length; i++) {
    spanInput[i].innerHTML = values[i];
  }

  let goMadAgainButton = document.createElement("button");
  goMadAgainButton.innerHTML = "GO MAD AGAIN!";
  let h = goMadAgainButton.style;
  h.fontFamily = "Love Ya Like A Sister";
  h.display = "block";
  h.margin = "2rem auto 0 auto";
  h.borderRadius = "0.7rem";
  h.backgroundColor = "rgb(119, 197, 35)";
  h.transition = "all 0.2s ease-in-out";
  h.fontSize = "1.5rem";
  h.padding = "0.9rem 1.9rem";
  goMadAgainButton.addEventListener("mouseenter", () => {
    h.backgroundColor = "rgb(238, 77, 48)";
    h.color = "white";
  });
  goMadAgainButton.addEventListener("mouseleave", () => {
    h.backgroundColor = "rgb(119, 197, 35)";
    h.color = "";
  });
  secondaryWrapper.appendChild(goMadAgainButton);
}

for (let i = 1; i < 16; i++) {
  let x = document.getElementById(`button${i}`);
  let y = showRandom(i);

  x.addEventListener("click", y);
}

function showRandom(i) {
  let input = document.getElementById(i);
  return function (event) {
    event.preventDefault();
    let z = input.classList.toString();

    input.value = myRandom[z][Math.floor(Math.random() * myRandom[z].length)];
  };
}

let buttonRandom = document.getElementById("buttonRandom");
buttonRandom.addEventListener("click", showRandomAll);

function showRandomAll(event) {
  event.preventDefault();

  for (let i = 1; i < 16; i++) {
    showRandom(i)(event);
  }
}
