import { create } from "../dom/create.js";
import { throwTypeError } from "../utils/throwError.js";
import { isString } from "../utils/typeOf.js";

export function AudioPlayer(source) {
  if (!isString(source)) {
    throwTypeError("source 인자는 오디오 경로이어야 합니다.");
  }

  this._audio = create("audio", {
    src: source,
  });
}

AudioPlayer.prototype.play = function () {
  this._audio.play();
};

AudioPlayer.prototype.loopPlay = function () {
  this.play();
  this._audio.addEventListener("ended", () => {
    this.play();
  });
};

AudioPlayer.prototype.pause = function () {
  this._audio.pause();
};

AudioPlayer.prototype.stop = function () {
  this.pause();
  this._audio.currentTime = 0;
};

//# private
// static

export class AudioPlayer {
  #audio = null;

  constructor(source) {
    if (!isString(source)) {
      throwTypeError("source 인자는 오디오 음원 경로(문자 값)이어야 합니다.");
    }

    this.#audio = create("audio", {
      src: source,
    });
  }

  play() {
    this.#audio.play();
  }

  loopPlay() {
    this.play();
    on(this.#audio, "ended", this.play.bind(this));
    // this.#audio.addEventListener('ended', this.play.bind(this));
  }

  pause() {
    this.#audio.pause();
  }

  stop() {
    this.pause();
    this.#audio.currentTime = 0;
  }

  isPlaying() {
    return this.#audio.paused;
  }
}
