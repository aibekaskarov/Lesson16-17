//1
let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

alert("Ваше имя: " + name + "\nВаш возраст: " + age);

//2
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

let remainder = num1 % num2;

console.log("Остаток от деления " + num1 + " на " + num2 + " равен " + remainder);

//3
let user = prompt("Согласны ли вы получать уведомления?");
console.log(user);

//4
let human = confirm("Ваш возраст:")

alert(human);

//5
let user1 = Number(prompt("Введите число: "));
let cub = parseInt(user1);
let result =  cub ** 3;
alert("Результат возведения числа в куб: " + result)

//6 
let string1 = Number(prompt("Введите первую строку: "));
let string2 = Number(prompt("Введите вторую строку: "));
let result1 = string1 + string2;
alert("Результат конкатенации строк: " + result1)

//7
let num5 = Number(prompt("Первое число: "));
let num6 = Number(prompt("Второе число: "));
let num7 = Number(prompt("Третье число: "));
let result2 = (num5 + num6 + num7) / 3;
alert("Среднее значение трех чисел: " + result2);   

//8
let hours = Number(prompt("Введите количество часов: "));
let minutes = Number(prompt("Введите количество минут: "));
let seconds = Number(prompt("Введитеколичество секунд: "));
let result3 = hours * 3600 + minutes * 60 + seconds;
alert("Общее количество секунд:" + result3);

//9
let celsia = Number(prompt("Введите температуру в градусах Цельсия: "));
let fahrenheit = celsia * 9/5 + 32;
let kelvin = celsia + 273.15;
alert("Температура в градусах Фаренгейта: " + fahrenheit);
alert("Температура в Кельвинах: " + kelvin);

//10
let radius = Number(prompt("Введите радиус круга: "));
let r = 3.14 * radius * radius
alert("площадь круга: " + r )    