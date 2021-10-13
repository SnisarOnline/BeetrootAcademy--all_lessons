/**
* Вопроссы по js
*/


/**
* document.createElement
*/
var element = document.createElement(tagName, [options]);



/**
* как работают ссылки
*/
let firstObject = {name: 'hello'};
let secondObject = firstObject;
firstObject = {name: "bye"};
console.log(secondObject);




/**
* ЕвентЛуп
* https://youtu.be/lrdaRbJctaA?t=2569
*/
for(var i = 0; i < 10; i++) {
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
















