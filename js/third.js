const programmingName = ["Pyton", "C++", "C#", "PHP"];

let searchWord = "Java Script";

for (const name of programmingName) {
  if (name !== searchWord) {
    console.log("Такого значення не має");
    programmingName.push(searchWord);
    console.log(programmingName);
    break;
  } else {
    console.log("Так, в масиві є це слово");
  }
}
