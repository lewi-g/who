function RockPaperScissors(userChoice){
  var computer = 1 + Math.floor((Math.random()*3));
  if (userChoice === computer) {
    console.log("It's a tie!")
  } else if (userChoice === 1 && computer === 3)){
    console.log("You've won!")
  }
}


RockPaperScissors(1);

if user is 2/3 and greater than comp user wins
if user is 1 comp is 3 user wins