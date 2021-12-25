'use strict';

//Class - класи це красива обгортка функції конструктора, класи в середені це тіж самі функції,
//Якщо є елементи на сайті чи в програмі одинакові по структурі і тп. то найкраще використовувати класи(шаблон)

class Rectangle {
    constructor(height, width) { //які речі будуть включені в шаблон
        this.height = height;
        this.width = width;
    }
    
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

//Принципи ООП
/*1. Абстракція - відділення концепції від її екземпляра, КЛАС - це концепція, ЕКЗЕМПЛЯРИ вони створені на основі коцепції*/ 
/*2. Наслідування - здатність нашого об*єкта чи класа базуватись на іншому об*єкті чи класі(головний механізм повторного використання якогось коду)*/

class ColoredRectangleWidthText extends Rectangle { //Наслідуємось від попереднього класу і отримуємо в  використання його властивості і методи
    constructor(height, width, text, bgColor) { //Аргументи всеодно потрібно передавати в конструктор
        super(height, width); //викликає конструктор предка і він завжди має бути на першому місці в конструкторі!!! і також можемо вказувати ті властивості які хочемо використовувати
        /*|
        this.height = height;
        this.width = width;
        */
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`TEXT: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWidthText(25, 10, 'Hello', 'red');
div.showMyProps();
console.log(div.calcArea());