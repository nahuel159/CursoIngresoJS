function mostrar()
{

    var sex = prompt("Ingrese f ó m");

    while(sex != "f" && sex != "m")
    {
        sex = prompt("Reingrese f ó m");
    }

    if (sex == "m")
    {
        document.getElementById('Sexo').value = ("Ingresó: Masculino");
    }
    else
    {
        document.getElementById('Sexo').value = ("Ingresó: Femenino");
    }

}//FIN DE LA FUNCIÓN