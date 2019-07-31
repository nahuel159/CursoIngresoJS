function mostrar()
{

	var num = parseInt(prompt("ingrese un número entre 0 y 10."));

	while (num >= 10 || num <= 0)
	{
		num = parseInt(prompt("Reingrese un número entre 0 y 10"));
	}

	document.getElementById("Numero").value = ("El número ingresado es: " + num);

}//FIN DE LA FUNCIÓN