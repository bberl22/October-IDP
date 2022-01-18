//inspiration from https://www.freecodecamp.org/news/learn-javascript-by-building-7-games-video-course/
document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'Cat 1',
      img: 'images/cat1.jpg'
    },
    {
      name: 'Cat 1',
      img: 'images/cat1.jpg'
    },
    {
      name: 'Cat 2',
      img: 'images/cat2.jpg'
    },
    {
      name: 'Cat 2',
      img: 'images/cat2.jpg'
    },
    {
      name: 'Cat 3',
      img: 'images/cat3.jpg'
    },
    {
      name: 'Cat 3',
      img: 'images/cat3.jpg'
    },
    {
      name: 'Cat 4',
      img: 'images/cat4.jpg'
    },
    {
      name: 'Cat 4',
      img: 'images/cat4.jpg'
    },
    {
      name: 'Cat 5',
      img: 'images/cat5.jpg'
    },
    {
      name: 'Cat 5',
      img: 'images/cat5.jpg'
    },
    {
      name: 'Cat 6',
      img: 'images/cat6.jpg'
    },
    {
      name: 'Cat 6',
      img: 'images/cat6.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

console.log(cardArray)

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', `./images/polkadot.jpg`)
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    //adding a conditional where if if two cards chosen match, it alerts the user and then "removes" the card
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.jpg')
      cards[optionTwoId].setAttribute('src', 'images/white.jpg')
      cardsWon.push(cardsChosen)
    } else {
      //if no match is found, the cards will remain and will flip back to board background
      cards[optionOneId].setAttribute('src', 'images/polkadot.jpg')
      cards[optionTwoId].setAttribute('src', 'images/polkadot.jpg')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }


  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    //add an image to the square
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }
  createBoard()
})