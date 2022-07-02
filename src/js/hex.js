'use strict';
const startupContainerEl = document.querySelector(`.startup-container`);
const hexBackgroundEl = document.querySelector(`.hex-background`);
const hexRowEl = document.querySelector(`.hex-row`);

// Mouse background effect
startupContainerEl.onmousemove = e => {
  var x = e.pageX - startupContainerEl.offsetLeft;
  var y = e.pageY - startupContainerEl.offsetTop;
  startupContainerEl.style.setProperty('--x', x + 'px');
  startupContainerEl.style.setProperty('--y', y + 'px');
};

// Get user's screen size on startup
const getWindowWidth = () => {
  const windowWidth = window.screen.width * window.devicePixelRatio;

  return Math.round(windowWidth / 104) + 4;
};

const getWindowHeight = () => {
  const windowHeight = window.screen.height * window.devicePixelRatio;

  return Math.round(windowHeight / 120) + 4;
};

const HEX_ROW_SIZE = getWindowWidth();
const HEX_COLUMN_SIZE = getWindowHeight();

// Add hex backgrounds
const setHexBackground = () => {
  const createRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const createHexColumns = () => {
    const hexHTML = `<div class="hex"></div>`;
    const lightHexHTML = `<div class="hex light-hex"></div>`;
    const darkHexHTML = `<div class="hex dark-hex"></div>`;
    // const filledHexHTML = `<div class="hex filled-hex"></div>`;
    let temp = ``;

    //RNG dictates the hex color
    for (let i = 0; i < HEX_ROW_SIZE; i++) {
      let count = createRandomNumber(1, 1000);
      if (count >= 880) {
        temp += darkHexHTML;
      } else if (count >= 1 && count <= 210) {
        temp += lightHexHTML;
        // } else if (count >= 211 && count <= 213) {
        //   temp += filledHexHTML;
      } else {
        temp += hexHTML;
      }
    }
    return temp;
  };

  for (let i = 0; i < HEX_COLUMN_SIZE; i++) {
    let hexRowHTML = `<div class="hex-row">${createHexColumns()}</div>`;

    hexBackgroundEl.insertAdjacentHTML(`beforeend`, hexRowHTML);
  }
};

// INIT
setHexBackground();

setInterval(() => {
  hexBackgroundEl.innerHTML = ``;
  setHexBackground();
}, 13500);
