//Ejercicio que genera la serie de fibonacci según el número ingresado por el usuario
function numeroDeElementos(numeroF){    
    let a=0;
    let acumAct=1;
    var acumAnt=0;
    let fibonacci=[]
    if(typeof numeroF=='number'){
        for(let i=0;i<=numeroF;i++){
            acumAnt=a;
            a=acumAct;
            acumAct=acumAnt+acumAct;
            fibonacci.push(acumAnt)
        }
        console.log("La serie de Fibonacci es: "+fibonacci);
    }else{
        console.log("El valor ingresado no es numérico, intente nuevamente")
    }
}
numeroDeElementos("poner el valor a evaluar aqui")