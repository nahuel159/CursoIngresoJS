function mostrar() {

	var i = 1;
	var numb = 0;
	var suma = 0;

	while (i <= 5) {
		i++
		numb = parseInt(prompt("Ingrese un valor"));
		while (isNaN(numb)) {
			numb = parseInt(prompt("Error. Ingrese un valor numérico"));
		}
		suma = suma + numb;
	}
	document.getElementById('suma').value = suma;
	document.getElementById('promedio').value = suma / 5;

}//FIN DE LA FUNCIÓN