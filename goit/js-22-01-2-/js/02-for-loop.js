/*
 * Цикл for
 */
// for (let count = 10; count >0; count -= 1){
//   console.log(count)
// }

// let userInput = prompt('Введите число')
// userInput = Number(userInput)
// let sum = 0

// for (let i = 0; i <= userInput; i += 1){
//   sum += i;
// }
//   console.log(sum)
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// console.log('qweqwe');

// const number = 15
// let sum = 0
// let i = 1
// while (i <= number) {
//   sum += i;
//   i += 1;
// }
// console.log(`Total = ${sum}`)

// let userInput;
// do {
//   userInput = prompt('Введи число 5')

//   if (userInput === null) {
//     break
//   }
//   userInput = Number(userInput)
// } while (userInput !==5)
// /*
//  * Pre-increment и Post-increment
//  */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

//  1 сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // 3 сгенерить случайную зп
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );

//   console.log(`ЗП работника номер ${i} - ${salary}`);

//   // 4  прибавить к тоталу
//   totalSalary += salary;
// }

// // 5 лог
// console.log('totalSalary: ', totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

//  1 вары
// const min = 0;
// const max = 5;
// let total = 0;

// // фор от min до max с шагом в 1
// for (let i = min; i <= max; i += 1) {
//   // проверяем остаток от деления
//   if (i % 2 !== 0) {
//     // console.log('Не чётное: ', i);
//     continue;
//   }

//   // пишем в сумму
//   console.log('чётное: ', i);
//   total += i;

//   // аналог +=
//   // total = total + i;
// }

// console.log('total: ', total);


// Алгоритм

// 1 создать цикл который спрашивает пользователя ввести число
// 2 если ввели null остановить
// 3 если вели не null преобразовать в число и дабавить к total 
// 4 после  цикла вывести общую сумму введених чисел
let total = 0;

while (true) {
  let input = prompt('введи число')

  if (input === null) {
    console.log('Отменено пользователем');
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    console.log('было введено не число, пропускаем текущую итерацию!')
    continue;
  }
  total += input;
} 

console.log(total)