const cars = ["Toyota", "BMW", "Honda", "Mercedes"];
cars[0] = "Nissan";
cars.push("Ferrari"); // menambahkan elemen ke array
const reversedCars = cars.reverse(); // membalik elemen array
//
cars[cars.length - 1] = "Lamborghini";

console.log(reversedCars);
console.log(cars);
console.log(cars.length);
console.log(cars[2]);
