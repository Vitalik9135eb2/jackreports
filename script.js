// Получаем canvas элемент
let canvas = document.getElementById('canvas'); 
 
// Указываем элемент для 2D рисования
let ctx = canvas.getContext('2d');


ctx.fillStyle = "black"; // Задаём чёрный цвет для линий 
ctx.lineWidth = 2.0; // Ширина линии
ctx.beginPath(); // Запускает путь
ctx.moveTo(30, 10); // Указываем начальный путь
ctx.lineTo(30, 460); // Перемешаем указатель
ctx.lineTo(500, 460); // Ещё раз перемешаем указатель
ctx.stroke(); // Делаем контур

// Цвет для рисования
ctx.fillStyle = "black";
// Цикл для отображения значений по Y 
for(let i = 0; i < 7; i++) { 
    ctx.fillText((5 - i) * 2 + "", 4, i * 80 + 60); 
    ctx.beginPath(); 
    ctx.moveTo(25, i * 80 + 60); 
    ctx.lineTo(30, i * 80 + 60); 
    ctx.stroke(); 
}
 
// Массив с меткам месяцев
let labels = ["Jan", "Dec", "Nov", "Oct", "Sep", "Aug"]; 
 
// Выводим меток
for(var i=0; i<7; i++) { 
    ctx.fillText(labels[i], 50+ i*100, 475);
}


// Объявляем массив данных графика
let data = [ 10, 53, 39, 54, 21 ]; 
 
// Назначаем зелёный цвет для графика
ctx.fillStyle = "green"; 
// Цикл для от рисовки графиков
for(var i=0; i<data.length; i++) { 
    var dp = data[i]; 
    ctx.fillRect(40 + i*100, 460-dp*5 , 50, dp*5); 
}