'use strict';

const names = ['Ivan', 'Alexander', 'Anna', 'Maria', 'Iva'];

//filter, також вертає новий масив

const shortNames = names.filter((name) => {
    if (name.length <= 4) {
        return name;
    }
});

//Method Map трансформує масив так як нам треба

let answers = ['Mike', 'daADS', 'SSssssSss'];

const result = answers.map((answer) => {
    return answer.toLowerCase();
});

console.log(answers);

console.log(result);

//methods 1.every/2.some
const somee = [4, 'wqe', 'sfasdasd'];

//2. Бере масив, перебирає його і якщо хоть один елемент підходить по певній умові то в такому випадку верне нам true якщо не знайде то false

//console.log(somee.some(item => typeof(item) === 'number'));
const res = somee.some((item) => {
    if (typeof(item) === 'number') {
        return item;
    }
});

console.log(res);

//1.every якщо всі елементи підходять до нашої умови тоді він поверне true
console.log(somee.every(item => typeof(item) === 'number'));

//Methods Reduce - служить для того щоб збирати масив в одне ціле 
const arr = [4, 5, 6, 10, 11];
//       початкове значення 0   +  4
//                          4   +  5  
const reduce = arr.reduce((sum, current) => sum + current);
console.log(reduce);

const string = ['apple', 'banana', 'orange', 'egg', 'potato'];
const resString = string.reduce((sum, current) => sum + ', ' + current); // `${sum}, ${current}
console.log(resString);

//витягнути імена з обєкта
const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

//entries дозволяє взяти об*єкт і перетоврити його в матрицю(масив масивів)

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);


