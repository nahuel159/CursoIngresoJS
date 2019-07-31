function mostrar() {
	var i = 0;
	var numb = 0;
	var suma = 0;
	var cond;

	do {
		i++
		numb = parseInt(prompt("Ingrese un valor"));
		while (isNaN(numb)) {
			numb = parseInt(prompt("Error. Ingrese un valor numérico"));
		}
		suma = suma + numb;
		cond = prompt("¿Quiere ingresar otro valor?")
		//while (cond != "s" || cond != "n") {
		//	cond = prompt("Valor invalído, ingrese s o n. ¿Quiere ingresar otro valor?")
		//}

	} while (cond == "s")

	document.getElementById('suma').value = suma;
	document.getElementById('promedio').value = suma / i;

}//FIN DE LA FUNCIÓN