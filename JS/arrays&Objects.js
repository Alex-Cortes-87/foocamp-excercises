
/*-------------------------------------------------------------  ARRAYs EXCERSICES  -------------------------------------------------------------*/

// Fill array function
function fillArray(initialNumber, lastNumber) {
    let numericArray =[];
    let range = lastNumber - initialNumber;
    for(i= 0; i <= range; i++){
        numericArray[i] = initialNumber;
        initialNumber++;
    }
    return numericArray;
}

// FizzBuzz function
function fizzbuzzArrayGenerator(array) {
    let fizzBuzzArray = [];
    array.forEach((item) => {
        if(((item % 3) === 0) && ((item % 5) === 0) ){
            fizzBuzzArray.push('FizzBuzz');
        }
        else if((item % 3) === 0){
            fizzBuzzArray.push('Fizz');
        }
        else if((item % 5) === 0){
            fizzBuzzArray.push('Buzz');
        }
        else {
            fizzBuzzArray.push(item.toString());
        }
    })
    return fizzBuzzArray;
}

// Fill array function call and printing in console
const numericArray = fillArray(3, 16);
console.log(`Numeric array: ${numericArray.join(', ')}`);

// FizzBuzz function call and printing in console
let fizzBuzzArray = fizzbuzzArrayGenerator(numericArray);
console.log(`\nFizzBuzz array: ${fizzBuzzArray.join(', ')}`);
;


/*-------------------------------------------------------------  OBJECTS EXCERSICES  -------------------------------------------------------------*/

function phraseGenerator(object) {
    let hobbieString = object.hobbies.join(', ');
    console.log(`\nHola mi nombre es ${object.nombre}, tengo ${object.edad} años, mido ${object.altura} cms, estudié ${object.profesion}, mi color favorito es ${object.colorFavorito} y mis hobbies son ${hobbieString}.`);
}

// Object creation
let alex = {
    nombre: 'Alex Cortés',
    edad: '35',
    profesion: 'Ingeniería Electrónica',
    colorFavorito: 'Verde',
    altura: '1.75',
    hobbies: ['Karting', 'Viajes', 'Lectura']
}

//Phrase Generator Function Call
phraseGenerator(alex);
