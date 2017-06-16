function decode(word) {
  if (word.charAt(0) === 'a'){
    return word.charAt(1);
  } else if (word.charAt(0) === "b") {
    return word.charAt(2);
  } else if (word.charAt(0) === 'c') {
    return word.charAt(3);
  } else if (word.charAt(0) === 'd') {
    return word.charAt(4);
  } else {
    return " ";
  }
}
// supposed to use a for loop? 

console.log(decode('craft') +
decode('block') +
decode('argon')+
decode('meter')+
decode('bells')+
decode('brown')+
decode('croon')+
decode('droop'));
