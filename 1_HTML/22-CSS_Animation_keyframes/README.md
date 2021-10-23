﻿# CSS animation
> CSS Анимация


## Lesson plan: 
+ что такое SEO и зачем


## Useful links:



---------

### Что бы запустить авто обновление страници нужно 
```npm run start ```


#### Детальней:

1) install [node.js](https://nodejs.org/en/)
2) install [browsersync](https://browsersync.io/)
    ```
       sudo npm install -g browser-sync
    ```
3) start
    ``` 
     browser-sync start --server --files "*.html,  css/*.css"
    ```


---------

#### Вопросы :
1) Если у элемента задана ширина 200px, внутренние отступы(padding) 20px и рамка(border) 5px
? вопрос какого размера будет блок ?
	+ без свойства box-sizing:border-box; = 250рх, C заданным свойством = 200px

2) У элемента задан display: inline; 
	? Какие свойства из width, height, padding и margin будут для него работать?
	+ полностью padding, и боковые margin.

3) Что такое Каскадность ?
4) Что такое специфичность CSS ?
	+ способ с помощью которого браузеры определяют, какие значения свойств следует применять
4.1) Как вычисляется специфичность?
5) что такое specification? Зачем она нужна?
6) Какое дефолтное значе для position ? <static>
7) В чем проблема абсолютного позиционирования ?
8) Сколько и какие координаты есть на странице, и как их использовать ?
9) Что такое БЕМ. Обяснить как на примере.
10) Тег form, зачем он ? 
	+ для обмена данными между пользователем и сервером
11) Сколько форм может быть на странице ?
12) Какой обязательный атрибут у формы ? <action / method>
13) Как отправить форму на сервер ?
14) Сколько уровней заголовков есть ? <6>
15) Как создать и использовать переменную в CSS ?
	+ :root{
		--color: Red;
		var(--color);
	}
16) Что такое viewport и зачем он нужен ?
	+ это область, которую видит пользователь на экране, когда заходит на страницу сайта с любого устройства.
17) Спомошью чего я могу адаптировать сайт ? <@media>
18) Какие бывают типы единицы измерения в CSS <Абсолютные / Относительные >
	+ Какие единицы измерения в CSS <em,rem,px,pt,%,vh/vw,vmin/vmax>
19) Сколько способов подключения Шрифтов 
	+ всего есть 3 способа! 
		1) в ХТМЛ по link-ссылке через сервис с шрифтами.
		2) В CSS через медиа правило - @font-face()
		3) В CSS через import - @import url()
20) как проименить загруженный шрифт <font-family>
21) Длячего нужен transition ?
	+ CSS-transitions  - позволяют контролиролировать переход от одного состояния к другому вовремя изменении.
22) чем отличается transition от animation ?
	+ CSS-animation - позволяют анимировать(запустить) переходЫ от одной конфигурации CSS стилей к другой
23) Главное отлимчие flex от grid ?

