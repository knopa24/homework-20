var Mname = 'My name ';
var is = 'is';
var Wyn = ' WRITE_YOUR_NAME';
console.log(Mname + is + Wyn);

var x = Number(prompt ('Введення x'));
var y = Number(prompt ('Введення y'));
var z = Number(prompt ('Введення z'));
var resulttask = x + (y * z) ;
console.log('Резулятат виразу: ', resulttask);

var firstNumber = Number (prompt ('Перше число для калькуляції'));
var secondNumber = Number (prompt ('Друге число для калькуляції'));
var calcAdd = firstNumber + secondNumber;
var calcSub = firstNumber - secondNumber;
var calcMult = firstNumber * secondNumber;
var calcDiv = firstNumber / secondNumber;

document.write('Результат додавання: ', calcAdd)
document.write('<br>'+'Результат віднімання -: ', calcSub)
document.write('<br>'+'Результат множення *: ', calcMult)
document.write('<br>'+'Результат ділення %: ', calcDiv)
