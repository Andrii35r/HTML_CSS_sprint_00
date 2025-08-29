const numbers = [1, 4, 6, 7, 12, 0, -5, 24];
let maxNumber = numbers[0]
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log("Наибольшее число:\n " + maxNumber);
