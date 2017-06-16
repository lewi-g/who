function makeFizzBuzzArray(numberChoice) {
  //  console.log(numberChoice);
    const result = [];
    for (var i=1; i <= numberChoice; i++) {
    if (i % 15 === 0) {
      result.push('fizzbuzz'); 
    	}
    else if (i % 5 === 0) {
      result.push('buzz');
    	}
    else if (i % 3 === 0) {
      result.push('fizz');
    	}
    else {
      result.push(i);
    	}
  	}	
  	console.log(result);
  	showFizzBuzzArray(result);
}

function showFizzBuzzArray(arr){
	let result = "";
	let uniqueClass;
	for (let i = 0; i < arr.length; i++) {
		item = arr[i];
//arr.forEach(function(item) {
		if (item === 'fizzbuzz' || item === 'buzz' || item === 'fizz') {
			uniqueClass = item;
		} else {
			uniqueClass = "";
		}
		
		//decide what the unique class will be
		// make it part of template
		result += (
		`<div class='fizz-buzz-item ${uniqueClass}'>
			<span>${item}</span>
		</div>`
		);
	}
	$('.js-results').empty();
	$('.js-results').append(result);
}


// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);
// assign .fizz-buzz-item to result[]
// forEach result[] {if fizz add .fizz, if buzz .....}


//Event Listerner
function listensForSubmit() {
    $('input[type=submit]').on('click', function(event) {
    event.preventDefault();
    //Return: Need to access #number-choice for our number.
    const numberChoice = $('#number-choice').val();
    makeFizzBuzzArray(numberChoice);

    });

}

//Takes fizzbuzzthings = > creates results / styles



$(function() {
    listensForSubmit();
})