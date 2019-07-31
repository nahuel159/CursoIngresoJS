function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;

	num = Math.floor(Math.random() * 10 + 1);

	if(num > 8)
	{
		alert ("Su nota es: " + num + "! Excelente");
	}
	else if (num > 3)
	{
		alert ("Su nota es: " + num + "! Aprobó");
	}
	else
	{
		alert ("Su nota es: " + num + " Vamos, la próxima se puede");
	}
		
}

//FIN DE LA FUNCIÓN