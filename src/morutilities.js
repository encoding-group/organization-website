/*
*
* Morutilities
* v0.000000001 2020
* https://moritzebeling.com
*
* /

/* console.log */
export const log = (message) => console.log(message);

/* dom query */
export const getFirst = (selector, parent = document) =>
  parent.querySelector(selector);

export const getAll = (selector, parent = document) =>
  parent.querySelectorAll(selector);

export const getId = (id, parent = document) => parent.getElementById(id);

export const getClass = (className, parent = document) =>
  parent.getElementsByClassName(className);

export const getTag = (tagName, parent = document) =>
  parent.getElementsByTagName(tagname);

/* on click */
export const onClick = (selector, callback) => {
  const elements = getAll(selector);
  elements.forEach((element) =>
    element.addEventListener('click', () => callback(element), false),
  );

  return elements;
};

/* window size */
export const getWindowSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

/* onV resize */
let resizeDelay;
let resizeCallbacks = [];
export const invokeResizeCallbacks = () => {
  clearTimeout(resizeDelay);
  resizeDelay = setTimeout(
    () => resizeCallbacks.forEach((callback) => callback(getWindowSize())),
    150,
  );
};

export const addResizeCallback = (callback) => resizeCallbacks.push(callback);

/* scroll position */
export const getScrollPosition = () => window.scrollY;

/* on scroll */
let _onScrollTimeout = false;
let _onScrollFunctions = [];
let _scrollLastPosition;
let _scrollPosition;
window.addEventListener(
  'scroll',
  (event) => {
    _scrollPosition = getScrollPosition();
    if (_onScrollTimeout === false && _scrollPosition !== _scrollLastPosition) {
      window.requestAnimationFrame(function () {
        _scrollPosition = Math.floor(_scrollPosition);

        for (let f in _onScrollFunctions) {
          _onScrollFunctions[f](_scrollPosition);
        }

        _scrollLastPosition = _scrollPosition;
        _onScrollTimeout = false;
      });
      _onScrollTimeout = true;
    }
  },
  {
    capture: true,
    passive: true,
  },
);

export function onScroll(callFunction) {
  _onScrollFunctions.push(callFunction);
  return getScrollPosition();
}

/* on load */
let _onLoadFunctions = [];
window.addEventListener('load', (event) => {
  for (let f in _onLoadFunctions) {
    _onLoadFunctions[f]();
  }
});
function onLoad(callFunction) {
  _onLoadFunctions.push(callFunction);
}
