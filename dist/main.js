// you have two cats and there's # (e.g. 9) snacks to be stolen each day
// this number can be selected by a dropdown
// three buttons >> cat1 stolen, cat 2 stole, reset
// when you press the cat1, cat 2 buttons, a counter goes up too keep tabs
//      if # snacks have been stolen, each number should be either red or green or black depending on if the cat won or lost or tied
//      the cat 1/2 buttons also get greyed out

//* when you press the cat1, cat 2 buttons, a counter goes up too keep tabs
//  addEventListeners for cat1Button on click
//      increase the display in counter1 valued by 1
//      make sure the number doesn't go above the value in snackCounter

//  addEventListeners for cat2Button
//      increase the display in counter1 valued by 1
//      make sure the number doesn't go above the value in snackCounter

// *when the value in counter1 and counter 2 added together equals to the snackCounter value chosen...
// disable cat1Button and cat2Button
// find which number is smaller between counter1 and counter2
//      query select counter1, and make it red/green/black depending on if its bigger/smaller
//      query select counter2, and make it red/green/blackdepending on if its bigger/smaller
// if counter1 value and counter2 value is equal, then queryselect both and make them grey

//*when users click on reset
// change the value of counter1 and counter 2 into 0

let firstButton = document.querySelector("#cat1Button");
let secondButton = document.querySelector("#cat2Button");
let firstCounter = document.querySelector("#counter1");
let secondCounter = document.querySelector("#counter2");
let snackCounter = document.querySelector("#snackCounter");
let resetButton = document.querySelector("#resetButton");

const increment = (counter) => {
  let numCounter = parseInt(counter.innerText);
  numCounter += 1;
  counter.innerText = `${numCounter}`;
  let numFirstCounter = parseInt(firstCounter.innerText);
  let numSecondCounter = parseInt(secondCounter.innerText);
  let numSnackCounter = parseInt(snackCounter.value);
  if (numFirstCounter + numSecondCounter === numSnackCounter) {
    document.querySelector("body").classList.add("disabledBackground");
    firstButton.disabled = true;
    secondButton.disabled = true;
    if (numFirstCounter > numSecondCounter) {
      firstCounter.classList.add("biggerNumber");
      secondCounter.classList.add("smallerNumber");
      document.querySelector("#cat2").classList.add("grayscale");
    } else if (numFirstCounter < numSecondCounter) {
      firstCounter.classList.add("smallerNumber");
      secondCounter.classList.add("biggerNumber");
      document.querySelector("#cat1").classList.add("grayscale");
    } else {
      firstCounter.classList.add("tieNumber");
      secondCounter.classList.add("tieNumber");
    }
  }
};

const reset = () => {
  firstCounter.innerText = "0";
  secondCounter.innerText = "0";
  firstCounter.classList.remove("smallerNumber");
  firstCounter.classList.remove("biggerNumber");
  firstCounter.classList.remove("tieNumber");
  secondCounter.classList.remove("biggerNumber");
  secondCounter.classList.remove("smallerNumber");
  secondCounter.classList.remove("tieNumber");
  firstButton.disabled = false;
  secondButton.disabled = false;
  document.querySelector("body").classList.remove("disabledBackground");
  document.querySelector("#cat2").classList.remove("grayscale");
  document.querySelector("#cat1").classList.remove("grayscale");
};

firstButton.addEventListener("click", (e) => {
  increment(firstCounter);
});

secondButton.addEventListener("click", (e) => {
  increment(secondCounter);
});

resetButton.addEventListener("click", reset);

snackCounter.addEventListener("input", reset);

//if
