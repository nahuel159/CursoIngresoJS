/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
    var num2;
    var num3;

    num1 = parseInt(document.getElementById("numeroDividendo").value);
    num2 = parseInt(document.getElementById("numeroDivisor").value);
    
    num3 = num1 % num2;

    alert (num3);
}
