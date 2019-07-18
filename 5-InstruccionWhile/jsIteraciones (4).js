function mostrar()
{
	var	numero = parseInt(prompt("ingrese un numero entre 0 y 10."));
	
	while (numero <0 || numero >10 || isNaN(numero)){

	alert ("Numero invalido");

	numero = parseInt(prompt("ingrese un numero entre 0 y 10."));

		}

	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN