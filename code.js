//Получение переменных
// в современной разработке метод  onclick не является хорошей практикой непосредственно в html

const value_player_1 = document.getElementById('value_player_1');
const value_player_2 = document.getElementById('value_player_2');
//onclick="document.getElementById('value_player_1').innerHTML = getRndInteger(1, 30), fizzbuzz(i)
//onclick="document.getElementById('value_player_2').innerHTML = getRndInteger(1, 30)">
// onclick="document.querySelector('.lot_btn').innerHTML = getRnd()"

//функция начала игры


let point_1 = 0
let point_2 = 0

const point_player_1 = document.querySelector('.point_player_1');
const point_player_2 = document.querySelector('.point_player_2');

const lot_btn = document.querySelector('.lot_btn');
const btn_1 = document.querySelector(".btn_1");
const btn_2 = document.querySelector(".btn_2");

lot_btn.onclick = () =>{
  this.innerHTML = getRnd();
}


btn_1.onclick = () =>{
  let rand = getRndInteger(1,30);
  let data = fizzbuzz(rand);
  value_player_1.innerHTML = rand;
  point_1 += data;
  point_player_1.innerHTML = point_1;
}
btn_2.onclick = () =>{
  let rand = getRndInteger(1,30);
  let data = fizzbuzz(rand);
  value_player_2.innerHTML = rand;
  point_2 += data;
  point_player_2.innerHTML = point_2;
}




// создаем функцию, что бы узнать кто начинает игру
const FIFTY_FIFTY = ["Начинает первый игрок", "Начинает второй игрок"];
//заглавные буквы раньше использвали как обозначение переменной константы
//так что поосторожнее с этим
function getRnd() {
  return FIFTY_FIFTY[Math.floor(Math.random() * FIFTY_FIFTY.length)];
}

// создаем функцию вывода рандомного числа
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//создаем функцию для определения условий "FizzBuzz"
//при выполнениии условий чило должно замениться на строку

// нет, это точно нельзы называть i /
// это должно быть навроде rand
function fizzbuzz(rand) {
  if (rand % 15 === 0) {
    return 5;
  } else if (rand % 3 === 0) {
    return 3;
  } else if (rand % 5 === 0) {
    return 2;
  } else {
    return 0;
  }
};
//при выполнении условий должны прибавляться очки игрокам
//при выполнении условий должны меняться смайлики
