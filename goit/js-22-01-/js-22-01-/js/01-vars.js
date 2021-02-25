/*
 * - Переменные и типы примитивов
 * - const и let
 * - Логирование с методом console.log()
 * - Уникальность идентификатора
 */

// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = 'Добро пожаловать!';
// const isOpen = true;
// const shouldConfirm = false;

// /*
//  * * - Оператор typeof
//  */

// const type = typeof isOpen;

// console.log(type);

/*
 * - Как window.alert() блокирует интерпретацию
 */

// console.log('До');
// alert('qweqweqwe');
// console.log('После');

// Домашка 1 задача
// const name = '«Генератор защитного поля»'; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

// console.log(firstMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

// console.log(secondMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'

// // Домашка задача №2
// const invoice = 100; 
// const stock = 100;

// // Write code under this line
// const message = invoice > stock ? 'На складе недостаточно товаров!' : '"Заказ оформлен, с вами свяжется менеджер"' ;

// console.log(message);

// const invoice = 150; 
// const stock = 100;

// // Write code under this line
// const message = invoice <= stock ? "Заказ оформлен, с вами свяжется менеджер" : "На складе недостаточно товаров!";

// console.log(message);

// // Домашка задача №3 
// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// // Write code under this line
//   if (userPassword === ADMIN_PASSWORD) {
//     message = ACCESS_IS_ALLOWED
//   } else if (userPassword === null) {
//     message = CANCELED_BY_USER
//   } else if (userPassword !== ADMIN_PASSWORD) {
//     message = ACCESS_DENIED
//   }
// console.log(message);

// //если userPassword равно 'jqueryismyjam' 
// // то значение message будет равно
// // 'Добро пожаловать!'

// //если userPassword равно  null 
// // то значение message будет равно  
// // 'Отменено пользователем!'

// //если userPassword равно '123' 
// // то значение message будет равно
// // 'Доступ запрещен, неверный пароль!'


// Домашка задача №4

const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces*pricePerDroid; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

// Write code under this line
if (totalPrice <= credits ) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов` 
} else if (orderPieces = null) {
  message = CANCELED_BY_USER
} else if (totalPrice > credits) {
  message = ACCESS_DENIED
}

console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
