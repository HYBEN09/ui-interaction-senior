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
  hasClass,
  getRandom,
} from "../../lib/index.js";

const SPEED_RATIO = 0.9; //.9 (0 생략가능)
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
const startButtonElement = $(`.${"Button--start"}`);
const stopButtonElement = $(`.${"Button--stop"}`);
const scoreDisplayElement = $(`.ScoreDisplay`);
const SCORE_VALUE = 10;

/* -------------------------------------------------------------------------- */
/* 게임 변수                                                                    */
/* -------------------------------------------------------------------------- */

let squares = [];
let snake = [];
let gameStopId;
let speed = 1000;
let isStarting = false;
let direction = 1;
let score = 0;
let appleIndex;

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

function drawApple() {
  //스네이크와 겹치지 않는 그리드 위치 찾기 (do while )

  do {
    appleIndex = getRandom(SQUARE_TOTAL - 1);
  } while (hasClass(squares[appleIndex], GAME_ELEMENTS.snake));

  console.log(appleIndex);

  //찾은 위치에 해당하는 squares DOM 요소에 애플 클래스 이름을 추가
  isEatApple();
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
  addHead();

  return { headIndex, tailIndex };
}

function move() {
  if (isGameOver()) {
    return gameOver();
  }

  let { headIndex } = movingSnake();

  //snake 헤드가 애플을 먹으면 처리

  // hasClass(squares[headIndex], GAME_ELEMENTS.apple

  if (hasClass(squares[headIndex], GAME_ELEMENTS.apple)) {
    //에플은 그리드에서 사라져야 함
    isEatApple();

    //스네이크 꼬리가 길어져야 함
    addTail();

    // console.log({ snake });

    //애플은 그리드의 임의 위치에 드로잉
    drawApple();

    //스코어 업
    scoreUp();

    //게임 난이도 업(게임 속도 향상)
    speedUp();
  }

  gameStopId = setTimeout(move, speed);
}

//--------------------------------------------------------------------

/* refactoring function */

function addHead() {
  let headIndex = snake[0];
  addClass(squares[headIndex], GAME_ELEMENTS.snake);
}

function isEatApple() {
  let headIndex = snake[0];
  if (hasClass(squares[headIndex], GAME_ELEMENTS.apple)) {
    removeClass(squares[appleIndex], GAME_ELEMENTS.apple);
  } else {
    addClass(squares[appleIndex], GAME_ELEMENTS.apple);
  }
}

function addTail() {
  let { headIndex, tailIndex } = movingSnake();
  addClass(squares[headIndex], GAME_ELEMENTS.snake);
  snake.push(tailIndex);
}

//--------------------------------------------------------------------

function scoreUp() {
  score += SCORE_VALUE;
  text(scoreDisplayElement, score);
}

function speedUp() {
  speed = SPEED_RATIO * speed;
  //console.log({ speed });
}

function isGameOver() {
  let headIndex = snake[0];
  let nextHeadIndex = headIndex + direction;

  switch (direction) {
    //벽의 위에 뱀의 머리가 충돌
    case -SQUARE_COLS:
      if (nextHeadIndex < 0) return true;

    //벽의 아래에 뱀의 머리가 충돌
    case SQUARE_COLS:
      if (nextHeadIndex >= SQUARE_TOTAL) return true;

    //벽의 왼쪽에 뱀의 머리가 충돌
    case -1:
      if (headIndex % SQUARE_COLS === 0) return true;

    //벽의 오른쪽에 뱀의 머리가 충돌
    case 1:
      if (headIndex % SQUARE_COLS === SQUARE_COLS - 1) return true;
  }

  //뱀의 몸통에 뱀의 머리가 충돌
  if (hasClass(squares[nextHeadIndex], GAME_ELEMENTS.snake)) {
    return true;
  }

  return false;
}

function gameOver() {
  alert("Game Over");
  gameStop();

  startButtonElement.disabled = false;
  text(startButtonElement, "start");
  stopButtonElement.disabled = true;

  resetGameState();
}

function getRandomSnakeArray() {
  let headIndex;
  let restIndex;

  do {
    headIndex = getRandom(SQUARE_TOTAL - 1);
    restIndex = headIndex % SQUARE_ROWS;
    console.log({ restIndex });
  } while (restIndex < SQUARE_ROWS - 7 || restIndex > SQUARE_ROWS - 3);

  // console.log("-------------------끝", restIndex);

  let bodyIndex = headIndex - 1;
  let tailIndex = headIndex - 2;

  return [headIndex, bodyIndex, tailIndex];
}

// loop(getRandomSnakeArray, 10);

function resetSquare() {
  each(squares, (square) =>
    removeClass(square, GAME_ELEMENTS.snake, GAME_ELEMENTS.apple)
  );
}

function resetScore() {
  score = 0;
  text(scoreDisplayElement, score);
}

function resetGameState() {
  speed = 1000;
  score = 0;
  //pristine
  //pure
  //dirty

  isStarting = false;
  direction = 1;
}

function resetGame() {
  resetSquare();
  resetScore();

  snake = getRandomSnakeArray();

  drawSnake();
  drawApple();
}

function gameStart() {
  resetGame();
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
  // console.log(direction);
}

on(startButtonElement, "click", handleGameStart);
on(stopButtonElement, "click", handleGameStop);
on(document, "keyup", handleKeyControl);
