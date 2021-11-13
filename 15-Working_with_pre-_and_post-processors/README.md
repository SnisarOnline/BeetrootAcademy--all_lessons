# Working_with_pre-_and_post-processors 
> Знакомство с препроцессорами


## Lesson plan:


## Useful links:
+ [browsersync](https://browsersync.io/)
+ [Prepros compiles](https://prepros.io/)
+ [инструмент современного веб-разработчика](https://webformyself.com/preprocessory-css-nezamenimyj-instrument-sovremennogo-veb-razrabotchika/)
+ barrel files [1](https://basarat.gitbook.io/typescript/main-1/barrel) [2](https://adrianfaciu.dev/posts/barrel-files/)

### Что бы запустить авто-обновление страници через Browser-sync нужно :
1) install [node.js](https://nodejs.org/en/)
2) install [browsersync](https://browsersync.io/)
    ```shell script
    sudo npm install -g browser-sync
    ```
3) start
    ```shell script
    browser-sync start --server --files "*.html,  css/*.css"
    ```
4) [курим доку](https://browsersync.io/docs) и [Добавляем кастомные настройки](https://browsersync.io/docs/command-line#init) 
    ```shell script
    browser-sync init
    browser-sync start --config 'bs-config.js'
    ```
5) настраиваем ... 

---------
#### Вопросы :
