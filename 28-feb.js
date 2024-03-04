// @ts-check
let crearedAt = "";
// fungsi biasa
function tambahLima() {
  console.log("tambah 5 fungsi");
}
// arrow fun
const tambahEnam = () => {
  console.log("tambah 6 fungsi");
};

// js doc / ** /
/**
 *
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @param {number} d
 * @returns {string}
 */
function penjumlahan(a, b, c, d) {
  //   console.log(a, b, c);
  //   console.log(`${a}  ${b}  ${c} = ${a + b + c}`);
  //   console.log(`${a}  ${b}  ${c}`);
  return `${a}  ${b}  ${c} ${d}`;
  console.log("hallo"); // ga kedetect karena dibawah return
}

// void function tidak mengembalikan
function voidFunction() {}

// fungsi never?
// fungsi any ?
/**
 *
 * @param {string} a
 * @param {string} b
 * @returns
 */
function returnArray(a, b) {
  return [a, b];
}

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
const fullname = getFullName("ahmad", "kurniawan");
console.log(fullname);

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns
 */
function dikalikan(a, b) {
  return a * b;
}

let hasil = penjumlahan("1", "anjayy", "gg dek", 10);
console.log(hasil);

/**
 *
 * @param  {...number} arg
 * @returns
 */
const jumlahkan = (...arg) => {
  return arg.reduce((prevValue, nextValue) => prevValue + nextValue);
};
tambahLima();
tambahEnam();
const hasilkali = dikalikan(10, 10);
console.log(hasilkali);
