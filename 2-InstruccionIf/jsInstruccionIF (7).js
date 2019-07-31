function mostrar()
{
//tomo la edad  
	var edad, eCivil;

	edad = parseInt(document.getElementById("edad").value);
	eCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && eCivil == "Soltero"){
		alert("Es muy pequeño para NO ser Soltero");
	}
	
}//FIN DE LA FUNCIÓN