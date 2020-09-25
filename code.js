// создаем функцию, что бы узнать кто начинает игру
let FIFTY_FIFTY=['Начинает первый игрок','Начинает второй игрок']
function getRnd() {
   return FIFTY_FIFTY[Math.floor(Math.random()*FIFTY_FIFTY.length)] 
}

// создаем функцию вывода рандомного числа
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//создаем функцию для определения условий "FizzBuzz"
//при выполнениии условий чило должно замениться на строку
let i = getRndInteger;
let fizzbuzz = function fizzbuzz(i) {
    if (i % 15 === 0) {
        return "FizzBuzz";
    } else if (i % 3 === 0) {
        return "Fizz";
    } else if (i % 5 === 0) {
        return "Buzz";
    }
    else {
        return i;
    }
}
//при выполнении условий должны прибавляться очки игрокам
//при выполнении условий должны меняться смайлики
