global.requestAnimationFrame = function requestAnimationFrame(callback) {
  setTimeout(callback, 0);
};
