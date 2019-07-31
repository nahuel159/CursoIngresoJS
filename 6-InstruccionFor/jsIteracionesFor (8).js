function mostrar()
{
	var contador = 0;
	var i;
	var num;
    
	num = prompt("Ingrese numero");
	num = parseInt(num);
         
    for(i=1; i <= num; i++){
        if( num % i == 0 ){
            contador++;
        }
    }
         
	if(contador == 2){
        document.write("el numero " + num + " es primo");
            }
	else{
		document.write("el numero " + num + " NO es primo");
	}
}//FIN DE LA FUNCIÓN