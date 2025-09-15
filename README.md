# Проект лэндинга для компании Натриум
Проект верстки для сайта на конструкторе Б24. Адаптивная, кроссбраузерная.

# Технологии
bootstrap-grid
```html
https://cdn.jsdelivr.net/npm/bootstrap-v4-grid-only@1.0.0/dist/
```
jquery-3.7.1
```html
https://code.jquery.com/jquery-3.7.1.min.js
```
swiper-js
```html
https://cdnjs.com/libraries/Swiper
```
В качестве препроцессора использовался SASS

# Разработка
## Требования
Для установки и запуска проекта, необходим NodeJS v8+.

## Установка зависимостей

>npm init <br>
>npm install --global gulp-cli <br>
>npm install --save-dev gulp <br>
>npm install --save-dev gulp-sass gulp-autoprefixer gulp-uglify gulp-concat browser-sync gulp-uglify-es sass gulp-clean-css del gulp-changed gulp-imagemin

### Запуск Development сервера
>gulp

### Создание билда
>gulp build
