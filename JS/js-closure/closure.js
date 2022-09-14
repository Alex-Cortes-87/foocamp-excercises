function toggle(...args) {
    let value;
    let contador = 0;
    return function toggleOption(){
        if (contador <= (args.length - 1)){
            value = args[contador];
            contador++;
            return value;
        }
        else if (contador > (args.length - 1)){
            contador = 0;
            //value = args[contador];
            //return value;
            return toggleOption();
        }
    }
  }
  
  const hello = toggle('hello');
  const onOff = toggle('on', 'off');
  let speed = toggle('slow', 'medium', 'fast');
  
  console.log(hello()); // "hello"
  console.log(hello()); // "hello"

  console.log(onOff()); // "on"
  console.log(onOff()); // "off"
  console.log(onOff()); // "on"
  console.log(onOff()); // "off"


  console.log(speed()); // "slow"
  console.log(speed()); // "medium"
  console.log(speed()); // "fast"
  console.log(speed()); // "slow"

  //closures