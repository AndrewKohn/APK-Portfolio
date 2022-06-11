'use strict';
const startupContainerEl = document.querySelector(`.startup-container`);
const hexBackgroundEl = document.querySelector(`.hex-background`);
const hexRowEl = document.querySelector(`.hex-row`);

startupContainerEl.onmousemove = e => {
  var x = e.pageX - startupContainerEl.offsetLeft;
  var y = e.pageY - startupContainerEl.offsetTop;
  startupContainerEl.style.setProperty('--x', x + 'px');
  startupContainerEl.style.setProperty('--y', y + 'px');
};

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
    for (let i = 0; i < 20; i++) {
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

  for (let i = 0; i < 11; i++) {
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
