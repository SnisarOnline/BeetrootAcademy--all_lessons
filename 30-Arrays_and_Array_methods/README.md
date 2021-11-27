# Arrays
> Arrays JS


## Lesson plan:
+ []()


## Useful links:
+ [Ассоциативные массивы в JavaScript](https://itchief.ru/javascript/associative-arrays)
+ []()


###### Youtube
+ [Объекты как ассоциативные массивы](https://youtu.be/0FAOtEzigeM)


#### Вопросы :
+ Какое основное отличие обьекта от простых типов данных ?
    > поизходит копирование не значений а ссылки. 

+ какие есть способы обратится к свойствам обьекту
    > .  and []
+ Как копировать обькт ? 
    > const car = {...}
    >
    > const copy = Object.create(Object.prototype, car)); - prototype
    >
    > const copy = Object.assign(blackCar, car); - join all object and return newObj
    >
    > const copy = JSON.parse( JSON.stringify(car) );

Как из несколиких обьктов сделать один обькт ?
    > Object.assign() - обьединяет перечисленные обькты 

+ Чем отличается футнкция как "конструктор" или Class ?
    > Class - Синтаксический сахор - созданный на базе футнкции

+ как создать много однотипных обьктов ?
    > футнкция как "конструктор" или Class - что по сути одно и тоже

+ сколько способов создать новый обьект ?
    > 5 =   new Object();    {};    function construction(){};    Object.created();     Object.assign();
