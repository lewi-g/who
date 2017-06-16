function average(numbers) {
  // initially we set total to the value of the 
  // first number.
  var total = numbers[0];
  // then we add each of the remaining numbers
  // to total.
  let i = 1;
  while( i < numbers.length) {
  //for (var i=1; i < numbers.length; i++) {
    total+= numbers[i];
    i++;
  }
  // then we return total divided by the length
  // of our numbers array to get the average.
  return total/numbers.length;
}

 var numList1 = [1, 2, 3, 44, 5, 6, 7, 8, 9, 10];
  //correctAns1 = 5.5;
  average(numList1);