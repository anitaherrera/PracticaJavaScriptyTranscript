//Ejercicio 3.2
//Dado el siguiente codigo:
var bankAccount = {
    money: 0,
    deposit: function (value, message) {
        this.money += value;
        if (message) {
            console.log(message);
        }
    }
};
bankAccount.deposit(20);
bankAccount.deposit(10, 'Deposit received');
console.log('[Exercise 3.2]', "Account value: $".concat(bankAccount.money));
//Agregue tipos explícitos a los parámetros y el tipo de retorno a la funcion ‘deposit‘
//Haz que el parámetro de ‘message‘ sea *optional*
