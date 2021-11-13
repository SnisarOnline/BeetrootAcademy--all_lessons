/**
 * Вопроссы по js
 */
 
/*
const foo = [1,2,3];
const [n] = foo;
console.log(n);
*/


/**
 * как работают ссылки
 */
let firstObject = {name: 'hello'};
let secondObject = firstObject;
firstObject = {name: "bye"};
console.log(secondObject);


/**
 * document.createElement
 */
var element = document.createElement(tagName, [options]);



/*
 * Лексическая облась видимости
 */
var v = 1;
var f1 = function() {
	console.log('Что будет распечатанно ?', v);
}
var f2 = function() {
	var v = 2;
	f1();
}
f2();




/**
 * ЕвентЛуп
 * https://youtu.be/lrdaRbJctaA?t=2569
 */
 // v1
console.log('I');
setTimeout(function () {
	console.log('love');
}, 0)
console.log('JavaScript');
 

 // v2
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('что выведет ?', i);
  }, 0)
}
console.log('End', i);


/**
 * в чем разница
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
Object.getOwnPropertyNames(); // возвращает массив, элементы которого являются строками, соответствующими перечислимым и неперечислимым свойствам, найденным непосредственно в данном объекте obj. 
Object.keys(); // метод возвращает Массив собственных перечислимы свойств заданного объекта имен
















