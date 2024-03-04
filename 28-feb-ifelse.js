// @ts-check

/**
 *
 * @param {string} input
 * @returns
 */
function isA(input) {
  if (input === "a") {
    // console.log("ini aa cuks");
    return "a";
  } else {
    // console.log("ini bukan aa");
    return "bukan a dari fungsi isA";
  }
}

function isB(input) {
  if (input === "b") return "ini b dari funsi isB";
  return "bukan b dari funsi isB";
}
const a = isA("a");
const b = isA("b");
const z = isB("Z");

console.log(a);
console.log(b);
console.log(z);
