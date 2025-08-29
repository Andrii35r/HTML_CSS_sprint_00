const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);

function calculateAverage(array) {
    return array.reduce((acc, num) => acc + num, 0) / array.length;
}
console.log(average);
