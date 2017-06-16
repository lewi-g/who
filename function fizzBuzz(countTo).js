function fizzBuzz(countTo) {

var result = [] 
let i = 1
while (i < countTo) {
switch (i % 15) {
  case 0:
    result.push("fizzBuzz");
    break;
  case 3:
  case 6:
  case 9:
  case 12:
    result.push("fizz");
    break;
  case 5:
  case 10:
    result.push("Buzz");
    break;
  default:
    result.push(i);
} i++
} return result
}
fizzBuzz(24);
  