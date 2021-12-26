'use strict';

const persone = {
    name: 'Alex',
    tel: 55445454544,
    parent: {
        mom: 'ala',
        dad: 'bred'
    }
};

const a = JSON.stringify(persone); // Обєкт перетворює в Json
console.log(a);

//З сервера приходить JSON і його необхідно перетворити в звичайний об*єкт
const b = (JSON.parse(JSON.stringify(persone)));
console.log(b);

//ГЛИБОКА КОПІЯ OBJECT
const clone = JSON.parse(JSON.stringify(persone));

/*1. JSON.stringify(persone) = перетворить існуючий об*єкт в JSON
  2. JSON.parse - розпарсить його назад в об*єкт
  Таким чином створиться клон об*єкта який не буде залежати від попереднього
  */
