/* calculadora 

Desarrolla un programa que calcule el promedio de tres notas ingresadas por el usuario, solicitando también el 
nombre del alumno y la materia. Además, el programa debe verificar si las notas ingresadas se encuentran dentro 
del rango válido (por ejemplo, de 0 a 10). Una vez calculado el promedio de las tres notas, 
el programa debe evaluar si dicho promedio es mayor o igual a 7.
Si el promedio es mayor o igual a 7, el programa imprimirá: 'Nombre del alumno, 
¡felicidades! Has aprobado con un promedio de [indicar promedio].' En caso de que el promedio sea menor a 7, 
el programa imprimirá: 'Nombre del alumno, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido 
es [indicar promedio].'*/

//Pedir nombre al alumno
let nombre=prompt("Ingresar su nombre: ");
//Pedir nombre de la materia
let materia=prompt("Ingrese nombre de la materia");
//Pedir notas de la materia y validar si esta dentro del rango de 0-10 y es numerico
let nota1, nota2, nota3, promedio;
let condicion=true;
while(condicion){
    nota1=parseFloat(prompt("Ingrese la Primera nota en el rango del 0 al 10"));
    if(!isNaN(nota1) && nota1 >=0 && nota1 <= 10){
       condicion=false;
    }else{
        alert("Su Primera nota ingresada No está en el rango del 0 al 10, vuelva a intentar");
    }
}
condicion=true;
while(condicion){
    nota2=parseFloat(prompt("Ingrese la Segunda nota en el rango del 0 al 10"));
    if(!isNaN(nota2) && nota2 >=0 && nota2 <= 10){
       // break;
       condicion=false;
    }else{
        alert("Su Segunda nota ingresada No está en el rango del 0 al 10, vuelva a intentar");
    }
}
condicion=true;
while(condicion){
    nota3=parseFloat(prompt("Ingrese la Tercera nota en el rango del 0 al 10"));
    if(!isNaN(nota3) && nota3 >=0 && nota3 <= 10){
       // break;
       condicion=false;
    }else{
        alert("Su tercera nota ingresada No está en el rango del 0 al 10, vuelva a intentar");
    }
}
//Realizar el promedio de las notas
promedio=(nota1+nota2+nota3)/3;
//Valida si el estudiante aprueba o no
if(promedio >= 7){
    alert(nombre +
        " ¡Felicidades! Has aprobado la materia de: " + materia + " ,con un promedio de: " + promedio);
}else{
    alert(nombre + " , gracias por tu esfuerzo. Nos vemos pronto en clase de: "+ materia+". El promedio obtenido es: " + promedio);
}
alert("Gracias " + nombre + " Por usar nuestra calculadora");