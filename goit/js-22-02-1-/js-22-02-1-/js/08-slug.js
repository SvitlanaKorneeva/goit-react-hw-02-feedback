/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';
// console.log(title.split(' '))

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join ('-'))

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

const words = title.toLowerCase().split(' ');
let slug = '';
console.log(words)

for (let i = 0; i < words.length; i+=1) {
    // console.log(words[i]);
    // if (i !== words.length - 1) {
    //     slug+= words[i] +'-'
    // } else {
    //     slug += words[i]
    // }
    
    slug += i !== words.length - 1 ? words[i] + '-' : words[i]
}
console.log(slug)