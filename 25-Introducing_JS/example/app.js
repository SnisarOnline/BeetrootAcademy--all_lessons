"use strict";
/* ================================================================== */
/* ===================== Браузерное окружение  ====================== */
/* ================================================================== */
console.log('window', window);

/* ============= 1) BOM ============= */
console.log('window.navigator', window.navigator);
console.log('navigator', navigator);

console.log('window.screen', window.screen);
console.log('screen', screen);

console.log('location', window.location);
console.log('location', location);
console.log('location.href', location.href);
console.log('frames', frames);
console.log('history', history);

/* ============= 2) DOM ============= */
console.log('window.document', window.document);
console.log('document', document);
console.log('document.head', document.head);
console.log('document.body', document.body);

/* ===== Поиск елементов в DOM =====*/
const buttonElement = document.body.querySelector('button');
console.log('buttonElement', buttonElement );

/* ============= 3) JavaScript ============= */
const promptResult = window.prompt("Кто ты ?");
console.log('promptResult :', promptResult);




/* ================================================================== */
/* =====================  Типы данных =============================== */
/* ================================================================== */
// boolean, string, (number, BigInt), object, symbol, undefined, null

// console.log('---------- Елементарные Типы Данных ----------');
// console.log(typeof true)
// console.log(typeof 'Javascript') // "", ''
// console.log(typeof `Javascript and ${10 + 5}`) // ``
// console.log(typeof 0)
// console.log(typeof 10n)
// console.log(typeof BigInt("1") ) // BigInt(1) / 1n
// console.log(typeof NaN) // Специальные значения
// console.log(typeof Infinity) // Специальные значения
// console.log(typeof {})
// console.log(typeof Math)
// console.log(typeof Symbol('JS'))
// console.log(typeof undefined)

// исключения
// console.log(typeof null) //
// console.log(typeof [])
// console.log(typeof function() {})
