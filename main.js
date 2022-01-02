'use strict';

//Methdos All and Race
const test = (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};
/*
test(1000).then(() => {
    console.log('1000');
});
test(2000).then(() => {
    console.log('2000');
});*/

//Метод all  служить для того щоб ми точно впевнились що всі проміси вже виконались(запити на різні сервера щоб отримати фото) і ми чекаємо всі відповіді від сервера і вже потім щось робити з ними

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

//Method race дії навпаки, а саме коли само перший проміс виконався тоді метод race починає працювати

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});
