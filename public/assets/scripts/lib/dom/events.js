import { isFunction, isString } from "../utils"
import { isElement } from "./typeCheck"

const on = (node, type, handler)=>{
  if(!isElement(node) && !isDocument(node) && node !== globalThis){
    throw new Error('첫번째 인자는 요소 또는 문서 노드 혹은 전역 객체만 허용합니다')
  }

  if(!isString(type) !==){
throw new Error('두번째 인자인 이벤트 타입은 문자영만 설정 가능합니다')
  }

  if(!isFunction(handler)){
    throw new Error('세번째 인자인 핸들러는 함수형만 가능 합니다.')
  }
}