/*Loop for adding all the numbers bettwen 0 and 1000 with break > 400*/
let num = 0;
let sum = 0;
for (num = 0; num <= 1000; num ++) {
    sum += num;//or sum = sum + num;
    if (sum > 400) break;
}
alert("Sum: " + sum);//or console.log("Sum is", sum)

/*Loops: Show numbers from 0 to 10*/
for (let currentNumber = 0; currentNumber < 10; currentNumber++) {
    alert (`Number ${currentNumber}`);
}
console.log ("currentNumber: ", currentNumber)

/*Loops: Show numbers from 100 to 0*/
for (let currentNumber = 100; currentNumber > 0; currentNumber--) {
    alert (`Number ${currentNumber}`);
}
console.log ("currentNumber: ", currentNumber)

/*Loops: Show even numbers between 0 and 100*/
for (let currentNumber = 0; currentNumber < 100; currentNumber++) {
    if ((currentNumber - 1) % 2) {
        alert (`Number ${currentNumber}`);
    }
}
console.log ("currentNumber: ", currentNumber)

/*Loops: With the mentioned output*/
let row = "";
for(let row =1; row <=13; row++) {
  
  for(let star=1; star <=row; row++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
// Other ways: let stars=""; for (let count=1; count<=13; count++){ stars+="*"; console.log(stars);}//

let lineNumber = 1;
while (lineNumber <= 13) {
    let stars = "";
    while (stars <= lineNumber) {
        stars = stars + "*";
        starCount++
    }
    lineNumber++;
}
console.log(stars);



































for (repeatedString = 1; repeatedString <= 13; repeatedString++) {
    alert (`${totalStarNumber}`);
}