/*Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
también debemos indicarlo. */

let numero = prompt('Introduce un numero');

if(parseInt(numero % 2) == 0){
    console.log('El numero es divisible entre 2');
}else{
    console.log('El numero no es divisible entre 2');
}