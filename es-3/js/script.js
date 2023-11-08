const numbers = [3, 7, 0, 8, 5]

function innerNum(array, a, b) {
    const newArray = array.filter((_, index) => index >= a && index <= b);
    return newArray;
}

const innerArray = innerNum(numbers, 1, 4);

console.log(innerArray);