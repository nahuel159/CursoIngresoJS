function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if (edad > 18 || edad <15)
{
   alert ("La persona no es adolescente");
}

}//FIN DE LA FUNCIÓN