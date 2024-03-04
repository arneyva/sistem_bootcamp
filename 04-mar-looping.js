/**
 *
 * @param {number} input
 * @returns {number}
 */
const diaGenap = (input) => (input % 2 == 0 ? "ini genap" : "ini ganjil");

for (let i = 0; i < 20; i++) {
  //   console.log(diaGenap(i), i);
}

// const users = ["Yuna", "Clara", "Vania"];
const users = [
  {
    fullNmae: "Yuna",
  },
  {
    fullNmae: "Clara",
  },
  {
    fullNmae: "Vania",
  },
];
for (let user of users) {
  console.log(user.fullNmae);
}
