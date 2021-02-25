/*
 * Операторы сравнения
 */

// console.log(15 < 3);

/*
 * Приведение (преобразование) типов к числу
 */

// console.log('10' > 5);

/*
 * Операторы равенства (== и ===) и неравества (!= и !==)
 * ✅ «ВСЕГДА ИСПОЛЬЗУЕМ СТРОГОЕ РАВЕНСТВО (===) и НЕРАВЕНСТВО (!==)»
 */
// const number = 20
// // const isRange = number > 10 && number < 30


// const isRange = number <  10 || number > 30

// console.log(`Число ${number} попадает в отрезок от 10 до 30 `, isRange)

// const isEqual = 1 === true;

// console.log(isEqual);

const isOnline = true
const isFriend = true
const isDnd = false

const canOpenChat = isOnline && isFriend && !isDnd
console.log('canOpenChat:', canOpenChat)

const subscription = 'pro'
const canAccessContent = subscription === 'pro' || subscription === 'vip'
console.log('canAccessContent:', canAccessContent)