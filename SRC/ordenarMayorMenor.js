//Realizar un ejercicio que ordene un array, y tome solo los valores numericos y los ordene demayor a menor
function inicio(arr){
    let aux;
    let resultado=[],numeros=[]
    //Valida si son numeros y los agrupa en un array de solo números
    for(let x=0;x<arr.length;x++){
        if(typeof arr[x]=='number'){
            numeros.push(arr[x])
        }
    }
    //ordena de mayor a menos el array nuevo de solo números
    for (i = 0; i <= numeros.length - 1; i++) {
        for (j = 0; j < numeros.length - i - 1; j++) {                                                              
            if (numeros[j + 1] < numeros[j]) {
                aux = numeros[j + 1];
                numeros[j + 1] = numeros[j];
                numeros[j] = aux;
            }  
        }
        resultado.push(numeros[j])
    }
    //Evalua si el array ingreado no tiene numeros
    if(resultado.length===0){
        console.log("El array ingresado no tiene números a evaluar, intente nuevamente")
    }else{
        console.log("Eln orden de mayor a menor es: " +resultado)
    }
    }
//con esto se puede evaluar la función
inicio(['2',0,'d',"hola",true,4,"pruebas",20,false,-1,-2])