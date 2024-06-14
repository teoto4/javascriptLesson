const arrayFirst = [5, 10, 15, 20];
const arraySecond = [10, 20, 30];
let resultFirst = 0;
let resultSecond = 0;
let finalResult = 0;

for (const numberFirst of arrayFirst) {
  resultFirst += numberFirst;
}
for (const numberSecond of arraySecond) {
  resultSecond += numberSecond;
}

finalResult = resultFirst + resultSecond;
console.log(finalResult);
