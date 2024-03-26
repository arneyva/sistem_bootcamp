const a = 100;
try {
  a = 200;
} catch (error) {
  console.log("error", error);
} finally {
  console.log("finally");
}
