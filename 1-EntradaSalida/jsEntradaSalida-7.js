/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

	var num1;
	var num2;
	var result;

function sumar()
{	
	var num1;
	var num2;
	var result;

	num1 = document.getElementById("numeroUno").value;
	num2 = document.getElementById("numeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	result = num1 + num2;

	alert("La suma es " + result);
	
}

function restar()
{
	var num1;
	var num2;
	var result;

	num1 = document.getElementById("numeroUno").value;
	num2 = document.getElementById("numeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	result = num1 - num2;
	alert ("La resta es " + result);
}

function multiplicar()
{ 	
	var num1;
	var num2;
	var result;

	num1 = document.getElementById("numeroUno").value;
	num2 = document.getElementById("numeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	result = num1 * num2;
	alert ("La multiplicación es " + result);
}

function dividir()
{	
	var num1;
	var num2;
	var result;
	
	num1 = document.getElementById("numeroUno").value;
	num2 = document.getElementById("numeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	result = num1 / num2;
	alert ("La división es: " + result);
}

