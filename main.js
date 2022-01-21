//Збереження даних на сайті без сервера чи баз даних. Вся інформація залишиться навіть якщо ми перезагрузимо сайт чи браузер. LocalStorage - об*єкт який влаштований в браузер(об*єкт window). Udemy Урок 64

//Записати ключ, значення
localStorage.setItem('number', '5');

//Отримати дані
localStorage.getItem('number');

//Видалити
localStorage.removeItem('number');

//Очистити
localStorage.clear();