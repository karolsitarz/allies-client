import { Howl } from 'howler';
import WEBM from './res/webm';
import MP3 from './res/mp3';

export const WAKE = 'wake';
export const SLEEP = 'sleep';
export const EVERYONE = 'everyone';
export const KILLER = 'killer';
export const CABBY = 'cabby';
export const COP = 'cop';
export const DOCTOR = 'doctor';
export const SNIPER = 'sniper';

const getHowler = (name) =>
  new Howl({
    src: [WEBM[name], MP3[name]],
    preload: false,
  });

const sounds = {
  [WAKE]: getHowler(WAKE),
  [SLEEP]: getHowler(SLEEP),
  [EVERYONE]: getHowler(EVERYONE),
  [KILLER]: getHowler(KILLER),
  [CABBY]: getHowler(CABBY),
  [COP]: getHowler(COP),
  [DOCTOR]: getHowler(DOCTOR),
  [SNIPER]: getHowler(SNIPER),
};

const play = (sound) => sounds[sound].play();

export const loadSounds = () =>
  Promise.all(
    Object.values(sounds).reduce((acc, sound) => {
      const promise = new Promise((res, rej) => {
        if (!sound) return;
        if (sound.state() === 'loaded') {
          return res();
        }
        if (sound.state() === 'loading') {
          return;
        }
        sound.on('load', res);
        sound.on('loaderror', rej);
        sound.load();
      });
      return [...acc, promise];
    }, [])
  );

export const playWake = (sound) => {
  sounds[sound].play();
  setTimeout(() => sounds[WAKE].play(), 1000);
};

export const playSleep = (sound) => {
  sounds[sound].play();
  setTimeout(() => sounds[SLEEP].play(), 1000);
};

export default play;
