'use strict';

/*AJAX*/
//1. Неактулаьний спосіб

const inputUAH = document.querySelector('#uah'),
      inputUSD = document.querySelector('#usd');

inputUAH.addEventListener('input', () => {
    //Робимо запит на сервер
    const request = new XMLHttpRequest();

    request.open('GET', 'current.json'); //Цей метод збирає настройки щоб в майбутньому зробити запит open(method, url, asyn, login, pass)

    //Вказуємо що саме ми передаємо
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //Відправляємо запит
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);

            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = 'error';
        }
    })
});

    /*Відповіді від сервера

    status/
    statusText/
    response/ відповідь від сервера, то що маємо використовувати
    readyState/ спрацьовує кілька разів, переходячи з одного епату на інший
    */