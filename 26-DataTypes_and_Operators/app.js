// console.log(a);
// console.log(b);

// boolean, string, (number, BigInt), object, symbol, undefined, null,
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
// console.log(typeof function(){})

// console.log('---------- Операторы ----------');
// var testValue = 10;
// console.log('target', ++testValue);
// console.log('target', --testValue);
// console.log(2 ** 3); // 8  (2 * 2 * 2, 3 раза)
// console.log(2 ** 4); // 16 (2 * 2 * 2 * 2, 4 раза)
// console.log(16 % 8); // 0
// console.log(16 % 6); // 4
// console.log(16 % 4); // 0
// console.log(16 % 3); // 1
// console.log(16 % 2); // 0

// console.log('---------- Приведение типов ----------');
// console.log('---- Boolean ----');
// console.log('1', Boolean());
// console.log('2', Boolean(''));
// console.log('3', Boolean('Hello'));
// console.log('4', Boolean(0));
// console.log('5', Boolean('0'));
// console.log('6', Boolean(' '));
// console.log('7', Boolean(null));
// console.log('8', Boolean({}));
// console.log('9', Boolean([]));
// console.log('0', Boolean(function(){} ));

// console.log('---- Number ----');
// console.log(Number())
// console.log(Number(0))
// console.log(Number('0'))
// console.log(Number(' '))
// console.log(Number('Hello'))
// console.log(Number(null))

// console.log('---- String ----');
// console.log(String(*))
// console.log(String({}))
// console.log(String([]))
// console.log( String( ['a', 5, {}]) )


// console.log('---------- Операторы и Приведение типов ----------');
// console.log(0 == 0)
// console.log(0 == '0')
// console.log(0 == false)
// console.log(0 === false) // type
// console.log('0' == false)
// console.log(1 == true)
// console.log(1 === true)
// console.log(1 == 1)
// console.log(1 == '1')
// console.log(1 === '1') // type
// console.log(undefined == null)
// console.log(undefined === null) // type


// строки
// console.log(1 + '2')
// console.log('' + 1 + 0)
// console.log('' - 1 + 0)
// console.log('3' * '8')
// console.log(4 + 10 + 'px')
// console.log('px' + 5 + 10)
// console.log('42' - 40)
// console.log('42px' - 2)
// console.log(null + 2)
// console.log(undefined + 42)

// console.log(false == '')
// console.log(false == [])
// console.log(false == {})
// console.log('' == 0)
// console.log('' == [])
// console.log('' == {})
// console.log(0 == [])
// console.log(0 == {})
// console.log(null == 0)
// console.log(null === 0)
// console.log(null > 0)
// console.log(null >= 0)
// console.log(undefined == 0)
// console.log(undefined === 0)
// console.log(undefined >= 0)
// console.log(undefined >= NaN)
// console.log(1/0 == Infinity)
// console.log("Vasya" == NaN)
// console.log(NaN == NaN)
// console.log(2 > 12)
// console.log("2" > "12")
// console.log(Symbol("foo") == Symbol("foo"))
// console.log(BigInt(1) == 1n)


// ---------- Условное ветвдение if, ? ----------
/*let language = 0;
if ( language == 2 ) {
  console.log('language == 2');
}
else if (language >= 5 || language >= 10) {
    console.log('language >= 5');
}
else if (language >= 5) {
    console.log('language >= 5');
}
else if (language >= 5) {
    console.log('language >= 5');
}
else if (language >= 5) {
    console.log('language >= 5');
}
else if (language >= 5) {
    console.log('language >= 5');
}
else {
    console.log('error');
}*/

/*
const start = 200;
const result = start ? 'yes 200' : 'no 200';
console.log('? result = ', result);
*/

/*

switch (b) {
    case 'aaaaa':
        console.log('aaaaa');
        break;
    case 'bbbbb':
        console.log('bbbbb');
        break;
    case 'ccccc':
        console.log('ccccc');
        break;
    case 7:
        console.log('7');
        break;
    default:
        console.log('default');
}
*/

// вопрос
// let height = undefined;
// alert(height || 100);
// alert(height ?? 100);


// Как сравнить объекты/масивы в Javascript
const someObject_1 = {
    name: '1'
};
const someObject_2 = {
    name: 'someObject'
};
const stringObject_1 = JSON.stringify(someObject_1);
const stringObject_2 = JSON.stringify(someObject_2);
console.log(stringObject_1 === stringObject_2);
