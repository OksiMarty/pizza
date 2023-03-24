let buttonMad = document.getElementById("buttonMad");
buttonMad.addEventListener("click", goMad);
let inputValues = [];
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

let adjective = [
  "bright",
  "sweet",
  "brave",
  "cute",
  "funny",
  "sneaky",
  "stupid",
  "awesome",
];
let nationality = [
  "Greek",
  "Ukrainian",
  "Polish",
  "Turkish",
  "Brazilian",
  "Spanish",
  "Egyptian",
  "Japanese",
];
let person = [
  "Daemon",
  "Potter",
  "Gaga",
  "Buddha",
  "Santa",
  "Biden",
  "Mickey",
  "Rachel",
];
let noun = [
  "doll",
  "cat",
  "house",
  "book",
  "plane",
  "ticket",
  "concert",
  "flower",
];
let pluralNoun = [
  "tables",
  "lamps",
  "carpets",
  "cars",
  "trees",
  "theatres",
  "toys",
  "benches",
];
let _number = ["2", "500", "100", "20", "1000000", "1000", "50", "30"];
let shapes = [
  "starts",
  "squares",
  "circles",
  "diamonds",
  "rectangles",
  "ovals",
  "zigzags",
  "hearts",
];
let food = [
  "octopus",
  "strawberry",
  "broccoli",
  "carrot",
  "ice-cream",
  "bubble-gum",
  "jam",
  "cherry",
];

function goMad(event) {
  event.preventDefault();

  let inputElements = document.getElementsByTagName("input");
  for (var i = 0; i < inputElements.length; i++) {
    let currentInput = inputElements[i];
    let elementValue = currentInput.value;

    if (elementValue) {
      for (var j = 0; j < vulgarList.length; j++) {
        if (elementValue.toLowerCase() == vulgarList[j]) {
          currentInput.value = "";

          currentInput.setAttribute("placeholder", "Vulgar!");
          break;
        }
      }
      inputValues.push(elementValue);
    } else {
      inputElements[i].setAttribute("placeholder", "Word!");
    }
  }
  showStory(inputValues);
}

function showStory(values) {
  let secondaryWrapper = document.getElementById("secondaryWrapper");
  secondaryWrapper.innerHTML = "";

  let newParagraph = document.createElement("p");

  newParagraph.innerHTML =
    "Pizza was invented by <span>adjective</span> <span>nationality</span> chef named <span>person</span>. To make a pizza you need to take a lump of <span>noun</span>, and make a thin, round <span>adjective</span> <span>noun</span>. Then you cover it with <span>adjective</span> sauce, <span>adjective</span> cheese, and fresh chopped <span>plural noun</span>. Next you need to bake it in a very hot <span>noun</span>. When it is done, cut it into <span>number</span> <span>shapes</span>. Some kids like <span>food</span> pizza the best, but my favourite is <span>food</span>. If I could, I would eat pizza <span>number</span> times a day!";
  newParagraph.style.backgroundColor = "white";
  newParagraph.style.textAlign = "center";
  newParagraph.style.padding = "2rem";
  newParagraph.style.color = "rgb(238, 77, 48)";
  newParagraph.style.fontSize = "2rem";
  newParagraph.style.borderRadius = "1rem";

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
  goMadAgainButton.style.fontFamily = "Love Ya Like A Sister";
  goMadAgainButton.style.display = "block";
  goMadAgainButton.style.margin = "2rem auto 0 auto";
  goMadAgainButton.style.borderRadius = "0.7rem";
  goMadAgainButton.style.backgroundColor = "rgb(119, 197, 35)";
  goMadAgainButton.style.transition = "all 0.2s ease-in-out";
  goMadAgainButton.style.fontSize = "1.5rem";
  goMadAgainButton.style.padding = "0.9rem 1.9rem";
  goMadAgainButton.addEventListener("mouseenter", () => {
    goMadAgainButton.style.backgroundColor = "rgb(238, 77, 48)";
    goMadAgainButton.style.color = "white";
  });
  goMadAgainButton.addEventListener("mouseleave", () => {
    goMadAgainButton.style.backgroundColor = "rgb(119, 197, 35)";
    goMadAgainButton.style.color = "";
  });
  secondaryWrapper.appendChild(goMadAgainButton);
}
let input1 = document.getElementById("1");
let button1 = document.getElementById("button1");
button1.addEventListener("click", showRandom1);

function showRandom1(event) {
  event.preventDefault();
  input1.value = adjective[Math.floor(Math.random() * adjective.length)];
}

let input2 = document.getElementById("2");
let button2 = document.getElementById("button2");
button2.addEventListener("click", showRandom2);

function showRandom2(event) {
  event.preventDefault();
  input2.value = nationality[Math.floor(Math.random() * nationality.length)];
}

let input3 = document.getElementById("3");
let button3 = document.getElementById("button3");
button3.addEventListener("click", showRandom3);

function showRandom3(event) {
  event.preventDefault();
  input3.value = person[Math.floor(Math.random() * person.length)];
}

let input4 = document.getElementById("4");
let button4 = document.getElementById("button4");
button4.addEventListener("click", showRandom4);

function showRandom4(event) {
  event.preventDefault();
  input4.value = noun[Math.floor(Math.random() * noun.length)];
}

let input5 = document.getElementById("5");
let button5 = document.getElementById("button5");
button5.addEventListener("click", showRandom5);

function showRandom5(event) {
  event.preventDefault();
  input5.value = adjective[Math.floor(Math.random() * adjective.length)];
}

let input6 = document.getElementById("6");
let button6 = document.getElementById("button6");
button6.addEventListener("click", showRandom6);

function showRandom6(event) {
  event.preventDefault();
  input6.value = noun[Math.floor(Math.random() * noun.length)];
}

let input7 = document.getElementById("7");
let button7 = document.getElementById("button7");
button7.addEventListener("click", showRandom7);

function showRandom7(event) {
  event.preventDefault();
  input7.value = adjective[Math.floor(Math.random() * adjective.length)];
}

let input8 = document.getElementById("8");
let button8 = document.getElementById("button8");
button8.addEventListener("click", showRandom8);

function showRandom8(event) {
  event.preventDefault();
  input8.value = adjective[Math.floor(Math.random() * adjective.length)];
}

let input9 = document.getElementById("9");
let button9 = document.getElementById("button9");
button9.addEventListener("click", showRandom9);

function showRandom9(event) {
  event.preventDefault();
  input9.value = pluralNoun[Math.floor(Math.random() * pluralNoun.length)];
}

let input10 = document.getElementById("10");
let button10 = document.getElementById("button10");
button10.addEventListener("click", showRandom10);

function showRandom10(event) {
  event.preventDefault();
  input10.value = noun[Math.floor(Math.random() * noun.length)];
}

let input11 = document.getElementById("11");
let button11 = document.getElementById("button11");
button11.addEventListener("click", showRandom11);

function showRandom11(event) {
  event.preventDefault();
  input11.value = _number[Math.floor(Math.random() * _number.length)];
}

let input12 = document.getElementById("12");
let button12 = document.getElementById("button12");
button12.addEventListener("click", showRandom12);

function showRandom12(event) {
  event.preventDefault();
  input12.value = shapes[Math.floor(Math.random() * shapes.length)];
}

let input13 = document.getElementById("13");
let button13 = document.getElementById("button13");
button13.addEventListener("click", showRandom13);

function showRandom13(event) {
  event.preventDefault();
  input13.value = food[Math.floor(Math.random() * food.length)];
}

let input14 = document.getElementById("14");
let button14 = document.getElementById("button14");
button14.addEventListener("click", showRandom14);

function showRandom14(event) {
  event.preventDefault();
  input14.value = food[Math.floor(Math.random() * food.length)];
}

let input15 = document.getElementById("15");
let button15 = document.getElementById("button15");
button15.addEventListener("click", showRandom15);

function showRandom15(event) {
  event.preventDefault();
  input15.value = _number[Math.floor(Math.random() * _number.length)];
}

let buttonRandom = document.getElementById("buttonRandom");
buttonRandom.addEventListener("click", showRandom);

function showRandom(event) {
  event.preventDefault();
  showRandom1(event);
  showRandom2(event);
  showRandom3(event);
  showRandom4(event);
  showRandom5(event);
  showRandom6(event);
  showRandom7(event);
  showRandom8(event);
  showRandom9(event);
  showRandom10(event);
  showRandom11(event);
  showRandom12(event);
  showRandom13(event);
  showRandom14(event);
  showRandom15(event);
}
