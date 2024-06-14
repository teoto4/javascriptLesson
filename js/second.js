const numberArray = [23, 1, 45, 87, 4, 55, 6];
let myNumber = numberArray[0];

for (const number of numberArray) {
  if (number > myNumber) {
    myNumber = number;
  }
}

console.log(myNumber);
