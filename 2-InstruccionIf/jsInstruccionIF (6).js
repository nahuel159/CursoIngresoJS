function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if (edad > 17)
{
   alert ("La persona es mayor de 18 años");
}
else if (edad >12){
    alert ("La persona es adolescente");
    }
    else
    {
        alert ("La persona es menor de 13 años")
}


}//FIN DE LA FUNCIÓN