function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes)
{
    case "Febrero":
        alert ("Este mes tiene 29 días");
    break;

    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert ("Este mes tiene 31 días");
    break;

    default:
        alert ("Este mes tiene 30 días");

}

}//FIN DE LA FUNCIÓN