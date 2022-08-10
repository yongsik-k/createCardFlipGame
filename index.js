const cardArray = [
  {
    name: "cat",
    img: "./public/cat.jpg",
    id: null,
    done: false,
  },
  {
    name: "bear",
    img: "./public/bear.jpg",
    id: null,
    done: false,
  },
  {
    name: "fox",
    img: "./public/fox.jpg",
    id: null,
    done: false,
  },
  {
    name: "giantpanda",
    img: "./public/giantpanda.jpg",
    id: null,
    done: false,
  },
  {
    name: "lesserpanda",
    img: "./public/lesserpanda.jpg",
    id: null,
    done: false,
  },
  {
    name: "rani",
    img: "./public/rani.jpg",
    id: null,
    done: false,
  },
  {
    name: "cat",
    img: "./public/cat.jpg",
    id: null,
    done: false,
  },
  {
    name: "bear",
    img: "./public/bear.jpg",
    id: null,
    done: false,
  },
  {
    name: "fox",
    img: "./public/fox.jpg",
    id: null,
    done: false,
  },
  {
    name: "giantpanda",
    img: "./public/giantpanda.jpg",
    id: null,
    done: false,
  },
  {
    name: "lesserpanda",
    img: "./public/lesserpanda.jpg",
    id: null,
    done: false,
  },
  {
    name: "rani",
    img: "./public/rani.jpg",
    id: null,
    done: false,
  },
];

const gameDOM = [];

// console.log("getGameDOM 함수 선언);
const getGameDOM = () => {
  //명시적으론 container 이라고 명시한 이후, row로 하는게 맞으나, 여기선 .row만 해도 된다.
  const rows = document.querySelectorAll(".container .row");

  for (let i = 0; i < rows.length; i++) {
    gameDOM[i] = rows[i].querySelectorAll(".column");
  }
};
const setIDtoCardArray = () => {
  cardArray[0].id = "0-0";
  cardArray[1].id = "0-1";
  cardArray[2].id = "0-2";
  cardArray[3].id = "0-3";
  cardArray[4].id = "1-0";
  cardArray[5].id = "1-1";
  cardArray[6].id = "1-2";
  cardArray[7].id = "1-3";
  cardArray[8].id = "2-0";
  cardArray[9].id = "2-1";
  cardArray[10].id = "2-2";
  cardArray[11].id = "2-3";
};
let clickFirst = -1;
let clickSecond = -1;
let clickcount = 0;

const createBoard = () => {
  for (let i = 0; i < gameDOM.length; i++) {
    for (let j = 0; j < gameDOM[i].length; j++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./public/questionmark.jpg");
      gameDOM[i][j].appendChild(card);
    }
  }
};

const setClickHistory = (location) => {
  if (clickFirst === -1) {
    clickFirst = location;
  } else {
    clickSecond = location;
  }
};

const backFlip = () => {
  const parseIdFirst = cardArray[clickFirst].id.split("-");
  const parseIdSecond = cardArray[clickSecond].id.split("-");
  setTimeout(() => {
    gameDOM[parseIdFirst[0]][parseIdFirst[1]].querySelector("img").src =
      "./public/questionmark.jpg";
    gameDOM[parseIdSecond[0]][parseIdSecond[1]].querySelector("img").src =
      "./public/questionmark.jpg";
  }, 500);
};

const iscorrect = () => {
  if (cardArray[clickFirst].name === cardArray[clickSecond].name) {
    cardArray[clickFirst].done = true;
    cardArray[clickSecond].done = true;
  } else {
    backFlip();
  }
};

const flip = (location) => {
  if (!cardArray[location].done) {
    setClickHistory(location);

    const parseId = cardArray[location].id.split("-");
    gameDOM[parseId[0]][parseId[1]].querySelector("img").src =
      cardArray[location].img;

    clickcount++;
    if (clickcount == 2) {
      clickcount = 0;
      iscorrect();
    }

    if (clickFirst !== -1 && clickSecond !== -1) {
      clickFirst = -1;
      clickSecond = -1;
    }
  }

};

//함수실행문
getGameDOM();
cardArray.sort(() => 0.5 - Math.random());
setIDtoCardArray();
//물음표로 가득찬 board 생성
createBoard();