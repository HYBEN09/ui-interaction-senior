import { delay } from "./assets/scripts/lib/utils/delay.js";
import { loadStorage, saveStorage } from "./assets/scripts/storage.js";

const albums = [
  {
    id: "album_0zie",
    title: "Nightmare",
    artist: "오월오일 ( 五月五日 )",
    "release-data": "2022.10.08",
    like: 147,
    "song-count": 5,
    cover: {
      size: 640,
      quality: 100,
      src: "https://cdnimg.melon.co.kr/cm2/album/images/110/73/494/11073494_20221007160706_500.jpg?f188fc02c9945d364ea086d808d12a93/melon/resize/282/quality/100/optimize",
    },
  },

  {
    id: "album_9zie",
    title: "Good Night",
    artist: "일곱시반",
    "release-data": "2022.10.08",
    like: 2,
    "song-count": 2,
    cover: {
      src: "https://cdnimg.melon.co.kr/cm2/album/images/110/73/513/11073513_20221007163126_500.jpg?cfeb2a21ff2a3d59df1d6e26f85b193d/melon/resize/282/quality/80/optimize",
    },
  },
];

const STORE = "@store";

delay(1100).then(() => {
  saveStorage(STORE, albums);
});

delay(2000).then(() => {
  const store = loadStorage(STORE);
  console.log(store);
});
