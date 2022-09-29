import {
  create,
  append,
  getNode as $,
  loop,
  text,
  each,
  addClass,
  removeClass,
  on,
} from "../../lib/index.js";

const SQUARE_ROWS = 10;
const SQUARE_COLS = 10;
const SQUARE_TOTAL = SQUARE_ROWS * SQUARE_COLS;
const GAME_ELEMENTS = {
  grid: "Grid",
  square: "Square",
  snake: "Snake",
  apple: "Apple",
};

const gridElement = $(`.${GAME_ELEMENTS.grid}`);
const startButtonElement = $(`${".Button--start"}`);
const stopButtonElement = $(`${".Button--stop"}`);

/* -------------------------------------------------------------------------- */
/* 게임 변수                                                                    */
/* -------------------------------------------------------------------------- */

let squares = [];
let snake = [2, 1, 0];
let gameStopId;
let speed = 1000;
let isStarting = false;
let direction = 1;

/* -------------------------------------------------------------------------- */
/* 게임 함수                                                                    */
/* -------------------------------------------------------------------------- */

function createSquare() {
  const square = create("div", { class: GAME_ELEMENTS.square });
  return square;
}

function drawSquares({ showGridNumbers = false } = {}) {
  loop((i) => {
    const square = createSquare();

    if (showGridNumbers) text(square, i);
    append(gridElement, square);
    squares.push(square);
  }, SQUARE_TOTAL);

  //console.log(squares);
}

function drawSnake() {
  each(snake, (index) => {
    addClass(squares[index], GAME_ELEMENTS.snake);
  });
}

function movingSnake() {
  //꼬리 떼기
  let tailIndex = snake.pop();
  removeClass(squares[tailIndex], GAME_ELEMENTS.snake);

  //머리 추가
  //let headIndex = snake.unshift(snake[0] + 1); => 3만 출력함

  snake.unshift(snake[0] + direction);
  let headIndex = snake[0];
  addClass(squares[headIndex], GAME_ELEMENTS.snake);
}

function move() {
  if (isGameOver()) {
    return gameOver();
  }
  movingSnake();
  gameStopId = setTimeout(move, speed);
}

function isGameOver() {
  let headIndex = snake[0];
  switch (direction) {
    case -SQUARE_COLS:
      if (headIndex + direction < 0) return true;

    case SQUARE_COLS:
      if (headIndex + direction >= SQUARE_TOTAL) return true;

    //벽의 왼쪽에 뱀의 머리가 충돌
    case -1:
      if (headIndex % SQUARE_COLS === 0) return true;

    case 1:
      if (headIndex % SQUARE_COLS === SQUARE_COLS - 1) return true;
  }
  //벽의 위에 뱀의 머리가 충돌
  //벽의 아래에 뱀의 머리가 충돌
  //벽의 왼쪽에 뱀의 머리가 충돌
  //벽의 오른쪽에 뱀의 머리가 충돌
  //뱀의 몸통에 뱀의 머리가 충돌

  return false;
}

function gameOver() {
  alert("game over");
  gameStop();
}

function gameStart() {
  gameReStart();
}

function gameReStart() {
  move();
}

function gameStop() {
  clearTimeout(gameStopId);
}

//showGridNumbers: true => grid안에 숫자 표시
function init() {
  drawSquares({ showGridNumbers: true });
  drawSnake();
}

init();

function handleGameStart() {
  if (!isStarting) {
    console.log("game start");
    isStarting = true;
    gameStart();
    text(startButtonElement, "restart");
  } else {
    console.log("game restart");
    gameReStart();
  }

  startButtonElement.disabled = true;
  stopButtonElement.disabled = false;
}

function handleGameStop() {
  console.log("game stop");
  gameStop();
  startButtonElement.disabled = false;
  stopButtonElement.disabled = true;
}

function handleKeyControl({ key }) {
  key = key.replace(/arrow/i, "").toLowerCase();
  switch (key) {
    case "up":
      if (direction === SQUARE_COLS) return;
      direction = -SQUARE_COLS;
      break;
    case "down":
      if (direction === -SQUARE_COLS) return;
      direction = SQUARE_COLS;
      break;
    case "left":
      if (direction === 1) return;
      direction = -1;
      break;
    case "right":
      if (direction === -1) return;
      direction = 1;
      break;
  }
  console.log(direction);
}

on(startButtonElement, "click", handleGameStart);
on(stopButtonElement, "click", handleGameStop);
on(document, "keyup", handleKeyControl);
