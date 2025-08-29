let number = [-3, 5, -1, 7, -9, 10, 0];
let positive = getPositiveNumbers(number);

function getPositiveNumbers(arr) {
    let positiveArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveArr.push(arr[i]);
        }
    }

    return positiveArr;
}


console.log(positive); 