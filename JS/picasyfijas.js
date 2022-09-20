function fijas(intento, numeroAleatorio) {
    let fijas = 0;
    for(let i = 0; i < numeroAleatorio.length; i ++){
        if (intento[i]=== numeroAleatorio[i]){
            fijas++;
       }   
    }
    return fijas;
}

function picas(intento, numeroAleatorio){
    let picas = 0;
    for(let i = 0; i < intento.length; i++){
        for(let j = 0; j < numeroAleatorio.length; j++){
            if (intento[i] === numeroAleatorio[j]){
                picas++;
            }
        }
    }
    return picas;
}

function picasyfijas(intento, numeroAleatorio) {
    let intentoConverted = intento.toString();
    let aleatorioConverted = numeroAleatorio.toString();
    let fijas1 = fijas(intentoConverted, aleatorioConverted);
    let picas1 = picas(intentoConverted, aleatorioConverted);
    alert(`Numero de Fijas ---> ${fijas1} 
Numero de Picas ---> ${picas1}`)
}


let numeroAleatorio = Math.floor(Math.random()*100) + 1000;
console.log(numeroAleatorio);
let flag = true;
while(flag === true) {
    let intento = prompt("Ingresa el numero");
    if (intento < numeroAleatorio){
        alert("El numero a adivinar es mas grande");
    }
    else if (intento > numeroAleatorio){
        alert("El numero a adivinar es mas pequeño");
    }
    else{
        alert("Felicidades, adivinaste el número");
        flag = false;
    }
    picasyfijas(intento,numeroAleatorio);
}

