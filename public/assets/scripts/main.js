import { documentTitle, getRandomMinMax } from "./lib/index.js";

const APP_CONFIG = {
  min: 40,
  max: 80,
};

//애플리케이션이 렌딩
function init() {
  const { min, max } = APP_CONFIG;

  //카운트 목표 값이 설정
  const TARGET_COUNT = getRandomMinMax(min, max);

  //문서 제목이 카운트 목표값 설정.
  documentTitle((initialDocTitle) => {
    return `(${TARGET_COUNT}) ${initialDocTitle}`;
  });
}

init();
//문서 요소 참조
//바깥에 코드를 써도 전역이 오염될 위험 없음( module 상태이기 때문에)
const startButton = getNode(".Button");
startButton.addEventListener("click", init());
//on(node,type,handler)
