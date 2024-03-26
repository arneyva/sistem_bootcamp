const getNumber = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(10);
      if (input == 22) {
        reject("nomor 22");
      }
      resolve("Yeah");
    }, 10000);
    // reject("gaada nomor");
  });
  //   return 10 * 200;
};
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const num = await getNumber();
    // console.log(num);
    console.log("berhasil dapat nomor", num);
  } catch (error) {
    console.log("error ", error.message);
  }
});
// function main() {}

// async function getUSer() {}

const inputNumberElement = document.getElementById("input-number");
inputNumberElement.addEventListener("change", async () => {
  const value = inputNumberElement.value;
  const num = await getNumber();
});
