const editArray = ["1-Pyton", "2-C++", "3-C#", "4-PHP", "5-Hello"];
let delimited;
let delimitedIndex = 0;
let arrayResult = [];

for (let i = 0; i < editArray.length; i++) {
  delimitedIndex = i + 1;
  delimited = `${delimitedIndex}-`;
  console.log(delimited);
  let wordSplit = editArray[i].split(`${delimited}`);
  console.log(wordSplit);
  arrayResult += wordSplit;
}
console.log(arrayResult);
