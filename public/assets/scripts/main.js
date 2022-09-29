import {
  on,
  each,
  getNode as $,
  documentTitle,
  getRandomMinMax,
  getRandom,
  getNode,
  text,
  memo,
  delay,
  removeClass,
  addClass,
  AudioPlayer,
} from "./lib/index.js";

// 애플리케이션 설정
const APP_CONFIG = {
  min: 40,
  max: 80,
  current: 0,
  step: 1,
  fps: 30,
};

//오디오 객체 생성
const shuffleSound = new AudioPlayer("/assets/media/shuffle.mp3");
const ticSound = new AudioPlayer("/assets/media/tic.mp3");

// 카운트 목표 값 설정
function getTargetCount() {
  const { min, max } = APP_CONFIG;
  return getRandomMinMax(min, max);
}

// 문서 제목 카운트 목표 값 설정
function updateDocumentTitle(targetCount) {
  documentTitle((initialDocTitle) => `(${targetCount}) ${initialDocTitle}`);
}

// UI의 카운트 값 업데이트
function renderCount(currentCount, isStop) {
  const count = memo(() => $(".Count"), "Count");
  text(count, currentCount);
  // isStop && count.classList.add("animate-none");
  isStop && addClass(count, "animate-none");
}

//에니메이션
function animate(initialCount, targetCount) {
  let stopAnimateId;

  let count = initialCount;

  return function animateCount(render) {
    count += 1;

    let isStopAnimate = count >= targetCount;

    // 증가하는 카운트 값 목표 값 비교
    render(count, isStopAnimate);

    // 카운트 업이 정지되는 조건
    if (isStopAnimate) {
      clearTimeout(stopAnimateId);
      shuffleSound.stop();
      return;
    }

    const FPS = memo(() => APP_CONFIG.fps, "fps");
    stopAnimateId = delay(animateCount.bind(this, render), 1000 / FPS);

    //클린업 함수 외부에 내보내기
    return () => clearTimeout(stopAnimateId);
  };
}

//curring function
// const stopAnimate = animate()(() => {
//   console.log("run animate function");
// });

// TEST
// globalThis.stopAnimate = stopAnimate;

// 애플리케이션 랜딩 초기화
function randomCountUp() {
  reset();
  const TARGET_COUNT = getTargetCount();
  updateDocumentTitle(TARGET_COUNT);

  const animateCount = animate(APP_CONFIG.current, TARGET_COUNT);
  animateCount(renderCount);

  shuffleSound.loopPlay();

  function reset() {
    const count = memo(() => $(".Count"), "Count");
    removeClass(count, "animate-none");
  }
}

// 문서 요소 참조
const startButton = $(".Button");

// TEST

// text(count, (countValue) => {
//   console.log(countValue);
//   return Number(countValue) + 99;
// });

// html(app, (htmlCode) => {
//   console.log(htmlCode);
//   return `${htmlCode} <div> update content </div>`;
// });

// 애플리케이션 최초 구동
randomCountUp();

// 이벤트 핸들링
on(startButton, "click", randomCountUp);
on(startButton, "mouseenter", ticSound.play.bind(ticSound));
