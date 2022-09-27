function doStuff (value: any):void {
    if (typeof value=== 'string'){
       console.log(value.toLowerCase().split('').join(''))
    }
    else { if (typeof value=== 'number')
               console.log(value.toPrecision(5))
               }
           value // coloque el cursor sobre `valor` aqui -> value:any puede recibir, number, string, boolean, objetos
}

doStuff(2);
doStuff(22);
doStuff(222);
doStuff('hello');
doStuff(true);
doStuff({});
   
   console.log('[Ejercicio 4.1]')