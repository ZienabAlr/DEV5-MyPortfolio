import Card from "./card.js";

// 🔥🔥🔥 TODO 1 - make sure to export the class, if you want to be able to import the class elsewhere
export default class Bingo {
  constructor() {
    // the constructor is called when you create a new instance of the class
    console.log("Welcome to Bingo! 🎉");

    // an array including 25 cards (5x5)
    this.cards = [
      "Already made a website",
      "Already worked before they started studying",
      "Already designed a logo",
      "Doesn't live with their parents",
      "Doesn't have a Discord account",
      "Has to commute more than 1 hour to school",
      "Is a vegetarian",
      "Can play the guitar",
      "Has already visited the US of A",
      "Is older than 25",
      "Owns a goldfish",
      "Is afraid of snakes",
      "Speaks 3 different languages",
      "Has never been to a festival before",
      "Knows what CSS is",
      "Is a Marvel Comics fan",
      "Knows all the ingredients for a mojito",
      "Has a student job",
      "Plays a team sport",
      "Knows how to play chess",
      "Is a DJ",
      "Likes cilantro",
      "Is afraid of heights",
      "Loves heavy metal music",
      "Is famous on Instagram"
    ];

    // we start by rendering the cards to the screen
    this.renderCards();

    // then we load the saved bingo cards from localstorage to mark them as done
    Bingo.load();
  }

  renderCards() {
    // this function renders the cards to the screen
    console.log("rendering cards");

   // 🔥🔥🔥 TODO 2
    // loop through all the cards in the array and create a new instance of a Card()
    // for()
    for (let i = 0; i < this.cards.length; i++) {
        // console.log(this.cards[i]);
        let card = new Card(this.cards[i]);
        card.render();
      }
      // create a new card object
      // let card = new Card(this.cards[i]);
      // render the card
      //card.render();
  }

  static checkWinner() {
    // a static function can be called without creating an instance of the class
    console.log("Checking for a winner");

    // 🔥🔥🔥 TODO 6
    // count all cards that are marked as done (select done items and count them with .length)
    /// let cardsDone = ;
    // if (cardsDone.length === 5) {
    // show the animated gif to the winner
    // document.querySelector(".bingo__overlay").style.display = "block";
    // }


    //let cardsDone = document.querySelector(".bingo__card--done");
    let cardsDone = document.querySelectorAll(".bingo__card--done");
    //https://bobbyhadz.com/blog/javascript-count-number-of-elements-with-class
    if (cardsDone.length === 5) {
      document.querySelector(".bingo__overlay").style.display = "block";
      //console.log("done");
    }

  }

  static save() {
    // 🔥🔥🔥 TODO 7
    // save the cards that are done to localstorage
    // you can simply save an array with the card numbers like [1, 6, 8]
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

    //let cardsWon = [];
    // if there are not done cards, remove localstorage
    // if (cards.length === 0) {
    // remove localstorage
    // }
    // save a selection like [1, 7, 8] to localstorage item "bingo"


    let cardsWon = [];
    let cards = document.querySelectorAll(".bingo__card--done").keys();
    for (let card of cards) {
      cardsWon.push(card);
    }
    if (cardsWon.length === 0) {
      localStorage.removeItem("bingo");
    } else {
      localStorage.setItem("bingo", JSON.stringify(cardsWon));
    }
    

  
    // for (let card of cards) {
    //   cardsWon.push(card);
    // }
    // for (let i = 0; i < cards.length; i++) {
    //   cardsWon.push(cards[i].dataset.card); //pushes the data-card number to the array cardsWon dataset.card is the number of the card
    //   // cardsWon.push(cards[i]);
    // }
    // if (cardsWon.length === 0) {
    //   localStorage.removeItem("bingo");
    // } else {
    //   let test = localStorage.setItem("bingo", JSON.stringify(cardsWon));

    // }

    // console.log(cardsWon)
  
    // save the index of the card in the array as the card number to localstorage
    // localStorage.setItem("bingo", JSON.stringify(cardsWon));
    // you might want to check out how JSON.stringify() works

    // let cardsWon = [];
  
    // let cards= document.querySelectorAll(".bingo__card--done");
    // let cardsArray = Array.from(cards);
    // console.log(cardsArray);

    // if (cardsArray.length === 0) {
    //   localStorage.removeItem("bingo");
    // } else {
    //   cardsArray.forEach(card => {
    //     let cardNumber = card.getAttribute("data-card");
    //     cardsWon.push(cardNumber);
    //   });
    //   localStorage.key("bingo", JSON.stringify(cardsWon));
    // }
  }

    //et cards= []; 
    //cards.push(card);

  //   for (let i = 0; i < cards.length; i++) {
  //     cardsWon.push(cards[i].card);
  //   }
  //   console.log(cardsWon);
  //   localStorage.setItem("bingo", JSON.stringify(cardsWon));
  //   if (cards.length === 0) {
  //     localStorage.removeItem("bingo");

  //   }


  // } 
  static load() {
    // 🔥🔥🔥 TODO 8
    // load the cards that are done from localstorage
    // this works the other way around of the save function
    // load the saved string from localstorage and parse it as an array, then loop over it
    console.log("loading bingo selection from localstorage");

    // check if localstorage item exists
    //if (localStorage.getItem("bingo")) {
    // let cardsWon = JSON.parse();
    // JSON.parse() will convert the string [1, 7, 8] back to an array which you can loop
    // loop over the numbers 1, 7, 8 and mark those cards as done by adding the right CSS class
    // .bingo__card--done


    if (localStorage.getItem("bingo")) {
        let cardsWon = JSON.parse(localStorage.getItem("bingo"));
        for (let i = 0; i < cardsWon.length; i++) {
          let card = document.querySelector(`[data-card="${cardsWon[i]}"]`);
          console.log(cardsWon);
          // card.classList.add("bingo__card--done");
        }
      }
    }
}
