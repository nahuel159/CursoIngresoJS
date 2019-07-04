/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe
    var aumento;
    var nuevosueldo;
    
   importe = parseFloat(document.getElementById("importe").value);
   aumento = importe *25/100;
   nuevosueldo = importe - aumento;
   document.getElementById("resultado").value = nuevosueldo;
}
