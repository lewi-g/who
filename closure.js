function repeat(fn, n) {
  for ( i=0; i< n; i++){
     fn();
  }
}


function hello() {
  console.log("hello world");
}

function goodBye() {
  console.log("good bye");
}

repeat(hello, 5);
repeat(goodBye, 5);

// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray'];

function filter(arr, fn) {
  
    let newArray = [];
  
  for (i = 0; i < arr.length; i++){
    
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    } 
 return newArray;
  }
}
filter(myNames);


// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray'];

function filter(arr, fn) {
  // we have an array and function
  // filter function takes those as arguments
  let newArray = []
  // for each item of the array,
  for ( let i=0; i <arr.length; i++){
  if (fn(arr[i]) === true) {
    newArray.push(arr[i]);
  }
  }
  return newArray
}