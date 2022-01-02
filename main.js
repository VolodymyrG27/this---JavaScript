'use strict';

//Проміси - обіцянка(полегшує роботу з асинхронними операціями)

console.log('Запит даних...');

//Створюємо проміси(в середену потрібно помістити колбак функцію)
/*Аргументи в промісі означають функіїї
    resolve - щось виконалось правильно, так як очікували
    reject - не виконалось
*/
const req = new Promise(function(resolve, reject) {

    setTimeout(() => {
        console.log('Підготовка даних...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product); //Передаємо product щоб можна було використовувати її за межами(return)
    }, 5000);
}); 

//цей метод виконується на промісі у випадку позитивного результату, then замінить функцію resolve
/*
req.then((product) => {
    const req2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 3000);
    });

    req2.then(data => {
        console.log(data);
    })
}); >>>>*/
//>>>> скорочений код
req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            reject();
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => { //Catch працює з reject
    console.error('error');
});


