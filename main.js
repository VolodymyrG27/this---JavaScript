'use strict'; // без строгого режиму this ссилається на обєкт window

function showThis(a, b) {
    console.log(this); //При строгому режимі this буде undefined
    function sum() {
        console.log(sum)
        return this.a + this.b;
    }
    console.log('sum', sum());
}

showThis();
/******************************* */
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
        function shout() {
            console.log(this); 
        }
        shout(); //В даному випадку буде undefined, тому що в даному випадку це просто функція(не метод об'єкта)
    }
}

obj.sum(); //В такому випадку виведе сам об'єкт. тобто ссилається на обєкт в якому находиться

/******************************* */
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let alex = new User('Alex', '21'); //this в конструкторах і класах створює новий об'єкт

/******************************* */

/* Як присвоїти любій функції this */

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname)
}

const user = {
    name: 'john'
};

//Ручне присвоєння this
sayName.call(user, 'Smith'); //Ці дві функції роблять одне і те саме, різниця відбувається тоді коли до функції -
sayName.apply(user, ['smith']); // - передані аргументи. Приклад синтаксису як передаються аргументи <<<<

//За допомогою функції BIND. Він створює нову функції і під неї вже підв'язує this

/******************************* */

function count(num) {
    return this * num;
}

const double = count.bind(2); //ця двійка переходить в this
console.log(double(3)); //це переходить в num

const btn = document.querySelector('button');

btn.addEventListener('click', function() {  //При () => ссилаємось на об'єкт window. Якщо не буде 'use strict' то до window, якщо буде то undefined
    console.log(this) //<(те саме що event.target при (e) =>). Отримаємо елемент button, елемент на якому виповнилась подія
});

/******************************* */

// у стрілкової функції немає свого контексту виклику, вона завжди буде брати виклик в свого родича

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this) //тобто виведе в консоль об'єкт
        };
        say();
    }
}

obj.sayNumber();

const dou = (a) => a * 2;