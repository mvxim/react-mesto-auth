# «Место на Реакте» — проектная работа №12, 12 спринт, 6 курс

## Что за проект:
Проект перенесен с ванильного JavaScript на React.\
Репозиторий с оригинальным кодом: https://github.com/mvxim/mesto

«Место» — веб-страница с галереей фотографий, с которой можно взаимодействовать:
поменять имя и описание страницы, добавить карточку с новой фотографией, удалить свои карточки, поставить лайк
фотографии. Проект взаимодействует с сервером Яндекс Практикума: карточки и информация сохраняются там.

![Превью](./mesto-react-preview.gif)

## Что использовал при создании:

* HTML
* CSS
    * Flexbox
    * Grid Layout
* JavaScript
    * ООП
    * AJAX
    * API сервера Яндекс-практикума
    * Constraint Validation API
* React.js
  * CRA
  * JSX
  * React DOM
  * React Router
* БЭМ Nested
* Git
* Webpack

## Как работать с проектом:

1. Клонировать проект:
   `git clone git@github.com:mvxim/mesto.git`
2. Установить зависимости:
   `npm i`
3. Запустить dev-server:
   `npm start`. Проект откроется по адресу: [http://localhost:3000](http://localhost:3000)
4. Собрать проект:
   `npm run build`

## Посмотреть проект:
🔗 [https://mvxim.github.io/mesto-react/](https://mvxim.github.io/mesto-react/)

## План развития проекта:
- [X] Добавить валидацию форм;
- [X] Починить скролл-лок;
- [X] Добавить аутентификацию;
- [ ] Перенести блокировку скролла в кастомный хук;
