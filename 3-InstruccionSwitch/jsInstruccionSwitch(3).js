function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes)
{
    case "Febrero":
        alert ("Este mes no tiene más de 29 días");
    break;

    default:
        alert ("Este mes tiene 30 días o más");
}
//alert (mes);
	
}//FIN DE LA FUNCIÓN