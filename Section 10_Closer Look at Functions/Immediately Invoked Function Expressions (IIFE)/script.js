'use strict';

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('Immediately Invoked Function Expressions (IIFE)');
  const isPrivate = 23;
})();

(() => console.log('Immediately Invoked Function Expressions (IIFE)'))();

{
  const isPrivate = 23;
  var notPrivate = 46;//var ignore the block
}
// console.log(isPrivate);
console.log(notPrivate);