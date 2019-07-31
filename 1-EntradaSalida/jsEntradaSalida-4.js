/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var data1;

	data1 = prompt("Ingrese un valor: ");

	document.getElementById("elNombre").value = data1; 

}

