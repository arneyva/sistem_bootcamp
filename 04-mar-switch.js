let fullNmae = "name";
switch (fullNmae) {
  case "name":
    console.log("Halo name");
    break;
  case "name 1":
    console.log("Halo name 1");
    break;
  default:
    console.log("Halo anda bukan orang");
    break;
}

/**
 *
 * @param {Date} date
 * @returns {'minggu' | 'senin' | 'selasa' | 'rabu' | 'kamis' | 'jumat' | 'sabtu'} //union string?
 */
function getDay(date) {
  //   console.log(date.getDay());
  switch (date.getDay()) {
    case 1:
      return "Senin";
    case 2:
      return "selasa";
    case 3:
      return "rabu";
    case 4:
      return "kamis";
    case 5:
      return "jumat";
    case 6:
      return "sabtu";
    case 7:
      return "minggu";
    default:
      return "minggu";
  }
}
const day = getDay(new Date());
console.log(day);

/**
 *
 * @param {number} input
 */
function iniGenap(input) {
  //   if (input % 2 === 0) {
  //     console.log("ini genap");
  //   } else {
  //     console.log("ini ganjil");
  //   }
  // ========================
  //   switch (input % 2 == 0) {
  //     case true:
  //       return "ini genap";
  //     case false:
  //       return "ini ganjil";
  //   }
  // ================================
  //   return input % 2 == 0 ? "ini genap" : "ini ganjil";
  // ======================
  if (input % 2 == 0) return "ini genap";
  return "ini ganjil";
}
console.log(iniGenap(10));

/**
 *
 * @param {string} text
 */
function min(text) {
  //   if (text.length != 3) return "text bukan 3 huruf";
  //   return "yup";

  if (!text && text.length != 3) return "text bukan 3 huruf";
  return "yup";
}
