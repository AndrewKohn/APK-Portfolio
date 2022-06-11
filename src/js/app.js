'use strict';
const cursorEl = document.querySelector('.cursor');
const startUpEl = document.querySelector(`.startup-container`);
const startupLogoEl = document.querySelector(`.startup-logo`);

// Sections
const homeSectionEl = document.querySelector(`.section--home`);
const aboutSectionEl = document.querySelector(`.section--about`);
const projectsSectionEl = document.querySelector(`.section--projects`);
const ctaSectionEl = document.querySelector(`.section--cta`);

// Containers
const homeSectionContainerEl = document.querySelector(
  `.section-container--home`
);
const aboutSectionContainerEl = document.querySelector(
  `.section-container--about`
);
const projectsSectionContainerEl = document.querySelector(
  `.section-container--projects`
);
const ctaSectionContainerEl = document.querySelector(`.section-container--cta`);

// Buttons
const btnEl = document.querySelectorAll('.btn');
const btnHomeEl = document.querySelector(`.btn-home`);
const btnAboutEl = document.querySelector(`.btn-about`);
const btnProjectsEl = document.querySelector(`.btn-projects`);
const btnCtaEl = document.querySelector(`.btn-cta`);
const logoEl = document.querySelector(`.logo`);

// /////////////// //
// CURSOR SETTINGS //
// /////////////// //
// Allows btn text to move with cursor & transforms cursor.
const buttonHover = function (e) {
  const btnTextEl = this.querySelector('.btn-text');
  const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,
    move = 25,
    xMove = (x / width) * (move * 2) - move,
    yMove = (y / height) * (move * 2) - move;

  btnTextEl.style.transform = `translate(${xMove}px, ${yMove}px)`;
  cursorEl.style.transform = `translate(-50%, -50%) scale(4)`;

  if (e.type === 'mouseleave') {
    btnTextEl.style.transform = ``;
    cursorEl.style.transform = ``;
  }
};

// Allows page cursor to follow user's cursor position.
const editCursor = e => {
  const { clientX: x, clientY: y } = e;
  cursorEl.style.left = x + 'px';
  cursorEl.style.top = y + 'px';
};

btnEl.forEach(button => button.addEventListener('mousemove', buttonHover));
btnEl.forEach(button => button.addEventListener('mouseleave', buttonHover));
window.addEventListener('mousemove', editCursor);

// //////////////// //
// STARTUP SETTINGS //
// //////////////// //
const changeBg = e => {
  startUpEl.style.backgroundColor = '#fefefeef';

  if (e.type === `mouseleave`)
    startUpEl.style.backgroundColor = `rgba(254, 254, 254, 0.99)`;
};

const startupClick = () => {
  startUpEl.classList.add('anim--fade-out');

  setTimeout(() => {
    startUpEl.classList.add('hidden');
  }, 1000);
};

startupLogoEl.addEventListener(`mousemove`, changeBg);
startupLogoEl.addEventListener(`mouseleave`, changeBg);
startupLogoEl.addEventListener(`click`, startupClick);

// /////////////// //
// BUTTON SETTINGS //
// /////////////// //
const openHomeSection = button => {
  if (button.target.classList.contains(`btn-home`)) {
    // Changes opening/closing animation respectively
    if (aboutSectionEl.classList.contains(`anim--open-section`)) {
      aboutSectionEl.classList.remove(`anim--open-section`);
      aboutSectionEl.classList.add(`anim--close-section`);
    } else if (projectsSectionEl.classList.contains(`anim--open-section`)) {
      projectsSectionEl.classList.remove(`anim--open-section`);
      projectsSectionEl.classList.add(`anim--close-section`);
    } else if (ctaSectionEl.classList.contains(`anim--open-section`)) {
      ctaSectionEl.classList.remove(`anim--open-section`);
      ctaSectionEl.classList.add(`anim--close-section`);
    }
    homeSectionEl.classList.remove(`anim--close-section`);
    homeSectionEl.classList.add(`anim--open-section`);
    btnHomeEl.classList.add(`hidden`);

    // Adjusts flexGow of each section
    homeSectionEl.style.flexGrow = `20`;
    aboutSectionEl.style.flexGrow = `1`;
    projectsSectionEl.style.flexGrow = `1`;
    ctaSectionEl.style.flexGrow = `1`;

    // Changes container visibility
    homeSectionContainerEl.classList.remove(`hidden`);
    aboutSectionContainerEl.classList.add(`hidden`);
    projectsSectionContainerEl.classList.add(`hidden`);
    ctaSectionContainerEl.classList.add(`hidden`);

    // Returns other buttons to original states.
    if (
      btnAboutEl.classList.contains(`hidden`) ||
      btnProjectsEl.classList.contains(`hidden`) ||
      btnCtaEl.classList.contains(`hidden`)
    ) {
      btnAboutEl.classList.remove(`hidden`);
      btnProjectsEl.classList.remove(`hidden`);
      btnCtaEl.classList.remove(`hidden`);
    }
  } else {
    // If conditions don't work, resets state and logs error
    homeSectionEl.classList.remove(`anim--close-section`);
    homeSectionEl.classList.add(`anim--open-section`);
    btnHomeEl.classList.add(`hidden`);
    homeSectionEl.style.flexGrow = `20`;
    homeSectionContainerEl.classList.remove(`hidden`);

    console.error(`Something went wrong with the Home Button action...`);
  }
};

const openAboutSection = button => {
  if (button.target.classList.contains(`btn-about`)) {
    // Changes opening/closing animation respectively
    if (homeSectionEl.classList.contains(`anim--open-section`)) {
      homeSectionEl.classList.remove(`anim--open-section`);
      homeSectionEl.classList.add(`anim--close-section`);
    } else if (projectsSectionEl.classList.contains(`anim--open-section`)) {
      projectsSectionEl.classList.remove(`anim--open-section`);
      projectsSectionEl.classList.add(`anim--close-section`);
    } else if (ctaSectionEl.classList.contains(`anim--open-section`)) {
      ctaSectionEl.classList.remove(`anim--open-section`);
      ctaSectionEl.classList.add(`anim--close-section`);
    }
    aboutSectionEl.classList.remove(`anim--close-section`);
    aboutSectionEl.classList.add(`anim--open-section`);
    btnAboutEl.classList.add(`hidden`);

    // Adjusts flexGow of each section
    homeSectionEl.style.flexGrow = `1`;
    aboutSectionEl.style.flexGrow = `20`;
    projectsSectionEl.style.flexGrow = `1`;
    ctaSectionEl.style.flexGrow = `1`;

    // Changes container visibility
    homeSectionContainerEl.classList.add(`hidden`);
    aboutSectionContainerEl.classList.remove(`hidden`);
    projectsSectionContainerEl.classList.add(`hidden`);
    ctaSectionContainerEl.classList.add(`hidden`);

    // Returns other buttons to original states.
    if (
      btnHomeEl.classList.contains(`hidden`) ||
      btnProjectsEl.classList.contains(`hidden`) ||
      btnCtaEl.classList.contains(`hidden`)
    ) {
      btnHomeEl.classList.remove(`hidden`);
      btnProjectsEl.classList.remove(`hidden`);
      btnCtaEl.classList.remove(`hidden`);
    }
  } else {
    // If conditions don't work, resets state and logs error
    aboutSectionEl.classList.remove(`anim--close-section`);
    aboutSectionEl.classList.add(`anim--open-section`);
    btnAboutEl.classList.add(`hidden`);
    aboutSectionEl.style.flexGrow = `20`;
    aboutSectionContainerEl.classList.remove(`hidden`);

    console.error(`Something went wrong with the About Button action...`);
  }
};

const openProjectsSection = button => {
  if (button.target.classList.contains(`btn-projects`)) {
    // Changes opening/closing animation respectively
    if (aboutSectionEl.classList.contains(`anim--open-section`)) {
      aboutSectionEl.classList.remove(`anim--open-section`);
      aboutSectionEl.classList.add(`anim--close-section`);
    } else if (homeSectionEl.classList.contains(`anim--open-section`)) {
      homeSectionEl.classList.remove(`anim--open-section`);
      homeSectionEl.classList.add(`anim--close-section`);
    } else if (ctaSectionEl.classList.contains(`anim--open-section`)) {
      ctaSectionEl.classList.remove(`anim--open-section`);
      ctaSectionEl.classList.add(`anim--close-section`);
    }
    projectsSectionEl.classList.remove(`anim--close-section`);
    projectsSectionEl.classList.add(`anim--open-section`);
    btnProjectsEl.classList.add(`hidden`);

    // Adjusts flexGow of each section
    homeSectionEl.style.flexGrow = `1`;
    aboutSectionEl.style.flexGrow = `1`;
    projectsSectionEl.style.flexGrow = `20`;
    ctaSectionEl.style.flexGrow = `1`;

    // Changes container visibility
    homeSectionContainerEl.classList.add(`hidden`);
    aboutSectionContainerEl.classList.add(`hidden`);
    projectsSectionContainerEl.classList.remove(`hidden`);
    ctaSectionContainerEl.classList.add(`hidden`);

    // Returns other buttons to original states.
    if (
      btnAboutEl.classList.contains(`hidden`) ||
      btnHomeEl.classList.contains(`hidden`) ||
      btnCtaEl.classList.contains(`hidden`)
    ) {
      btnAboutEl.classList.remove(`hidden`);
      btnHomeEl.classList.remove(`hidden`);
      btnCtaEl.classList.remove(`hidden`);
    }
  } else {
    // If conditions don't work, resets state and logs error
    projectsSectionEl.classList.remove(`anim--close-section`);
    projectsSectionEl.classList.add(`anim--open-section`);
    btnProjectsEl.classList.add(`hidden`);
    projectsSectionEl.style.flexGrow = `20`;
    projectsSectionContainerEl.classList.remove(`hidden`);

    console.error(`Something went wrong with the Projects Button action...`);
  }
};

const openCtaSection = button => {
  if (button.target.classList.contains(`btn-cta`)) {
    // Changes opening/closing animation respectively
    if (aboutSectionEl.classList.contains(`anim--open-section`)) {
      aboutSectionEl.classList.remove(`anim--open-section`);
      aboutSectionEl.classList.add(`anim--close-section`);
    } else if (projectsSectionEl.classList.contains(`anim--open-section`)) {
      projectsSectionEl.classList.remove(`anim--open-section`);
      projectsSectionEl.classList.add(`anim--close-section`);
    } else if (homeSectionEl.classList.contains(`anim--open-section`)) {
      homeSectionEl.classList.remove(`anim--open-section`);
      homeSectionEl.classList.add(`anim--close-section`);
    }
    ctaSectionEl.classList.remove(`anim--close-section`);
    ctaSectionEl.classList.add(`anim--open-section`);
    btnCtaEl.classList.add(`hidden`);

    // Adjusts flexGow of each section
    homeSectionEl.style.flexGrow = `1`;
    aboutSectionEl.style.flexGrow = `1`;
    projectsSectionEl.style.flexGrow = `1`;
    ctaSectionEl.style.flexGrow = `20`;

    // Changes container visibility
    homeSectionContainerEl.classList.add(`hidden`);
    aboutSectionContainerEl.classList.add(`hidden`);
    projectsSectionContainerEl.classList.add(`hidden`);
    ctaSectionContainerEl.classList.remove(`hidden`);

    // Returns other buttons to original states.
    if (
      btnAboutEl.classList.contains(`hidden`) ||
      btnProjectsEl.classList.contains(`hidden`) ||
      btnHomeEl.classList.contains(`hidden`)
    ) {
      btnAboutEl.classList.remove(`hidden`);
      btnProjectsEl.classList.remove(`hidden`);
      btnHomeEl.classList.remove(`hidden`);
    }
  } else {
    // If conditions don't work, resets state and logs error
    ctaSectionEl.classList.remove(`anim--close-section`);
    ctaSectionEl.classList.add(`anim--open-section`);
    btnCtaEl.classList.add(`hidden`);
    ctaSectionEl.style.flexGrow = `20`;
    ctaSectionContainerEl.classList.remove(`hidden`);

    console.error(`Something went wrong with the CTA Button action...`);
  }
};

const resetSections = () => {
  //reset animations
  homeSectionEl.classList.remove(`anim--open-section`);
  homeSectionEl.classList.add(`anim--close-section`);
  aboutSectionEl.classList.remove(`anim--open-section`);
  aboutSectionEl.classList.add(`anim--close-section`);
  projectsSectionEl.classList.remove(`anim--open-section`);
  projectsSectionEl.classList.add(`anim--close-section`);
  ctaSectionEl.classList.remove(`anim--open-section`);
  ctaSectionEl.classList.add(`anim--close-section`);

  // each buttons reset back to original states
  btnHomeEl.classList.remove(`hidden`);
  btnAboutEl.classList.remove(`hidden`);
  btnProjectsEl.classList.remove(`hidden`);
  btnCtaEl.classList.remove(`hidden`);

  // each section containers
  homeSectionContainerEl.classList.add(`hidden`);
  aboutSectionContainerEl.classList.add(`hidden`);
  projectsSectionContainerEl.classList.add(`hidden`);
  ctaSectionContainerEl.classList.add(`hidden`);

  // Reset flex sections
  homeSectionEl.style.flexGrow = `1`;
  aboutSectionEl.style.flexGrow = `1`;
  projectsSectionEl.style.flexGrow = `1`;
  ctaSectionEl.style.flexGrow = `1`;
};

btnHomeEl.addEventListener(`click`, openHomeSection);
btnAboutEl.addEventListener(`click`, openAboutSection);
btnProjectsEl.addEventListener(`click`, openProjectsSection);
btnCtaEl.addEventListener(`click`, openCtaSection);
logoEl.addEventListener(`click`, resetSections);
