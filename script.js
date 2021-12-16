function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function playSoundClick(e) {
  const click = e.target.classList[0];
  switch (click) {
    case 'A':
      defineSoundClick('65');
      break;
    case 'S':
      defineSoundClick('83');
      break;
    case 'D':
      defineSoundClick('68');
      break;
    case 'F':
      defineSoundClick('70');
      break;
    case 'G':
      defineSoundClick('71');
      break;
    case 'H':
      defineSoundClick('72');
      break;
    case 'J':
      defineSoundClick('74');
      break;
    case 'K':
      defineSoundClick('75');
      break;
    case 'L':
      defineSoundClick('76');
      break;
  }
}

function defineSoundClick(datakey) {
  const audio = document.querySelector(`audio[data-key="${datakey}"]`);
  audio.currentTime = 0;
  audio.play();
  const key = this.document.querySelector(`.key[data-key="${datakey}"]`);
  key.classList.add('playing');

}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.onclick = playSoundClick;
window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));