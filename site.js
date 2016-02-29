function add(num1, num2){

	var addition = parseFloat(num1) + parseFloat(num2),
		addString = num1 + '+' + num2 + '=' + addition;

		return addString
}

function subtract(num1, num2){

	var subtraction = parseFloat(num1) - parseFloat(num2),
		subString = num1 + '-' + num2 + '=' + subtraction;

		return subString 

}

function multiply(num1, num2){

	var multiplication = parseFloat(num1) * parseFloat(num2),
		multString = num1 + '*' + num2 + '=' + multiplication;

		return multString
}

function divide(num1, num2){

	var division = parseFloat(num1) / parseFloat(num2),
		divString = num1 + '/' + num2 + '=' + division;

		return divString
}

function populatehtml(operation){

	var input1 = document.getElementById('first').value;
	var input2 = document.getElementById('second').value;
	var output = operation(input1, input2);
		document.getElementById('result').innerText += output;


}

document.getElementById('add').onclick = function(){populatehtml(add)};
document.getElementById('subtract').onclick = function(){populatehtml(subtract)};
document.getElementById('multiply').onclick = function(){populatehtml(multiply)};
document.getElementById('divide').onclick = function(){populatehtml(divide)};



