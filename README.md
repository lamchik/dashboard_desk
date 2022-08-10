# Приложение - Таск-менеджер доска

Приложение таск-менеджер состоящее из двух страниц

1. Главная страница приложения
2. Страница тикета

### Главная страница
На главной странице - три колонки с очередями задач и три фильтра. 
Задачи можно создавать, удалять, редактировать, 
передвигать между колонками dragandprop-ом.
При нажатии на три точки на тикете происходит переход на страницу тикета.


### Фильтры
При нажачии на чекбоксы с фильтрами тикеты фильтруются в зависимости от наличия контента.
Например, если у фильтра "Описание" активируется чекбокс, 
то на странице остаются только те тикеты, в которых есть описание. 

### Страница тикета
На странице тикета так же можно задачу редактировать и удалять. 
При удалении тикета на на странице тикета происходит редирект на главную страницу. 

## Приложение написано на React 

Cтейт-менеджер - redux

Библиотеки использованные при разработке:
1. React-hook-form - [https://react-hook-form.com/](https://react-hook-form.com/)
2. DragnDrop - [https://dndkit.com/](https://dndkit.com/)
3. Redux-logger - [https://www.npmjs.com/package/redux-logger](https://www.npmjs.com/package/redux-logger)
4. Reselect - [https://github.com/reduxjs/reselect](https://github.com/reduxjs/reselect)
5. Redux-Thunk - [https://github.com/reduxjs/redux-thunk](https://github.com/reduxjs/redux-thunk)
6. Redux - [https://redux.js.org/](https://redux.js.org/)
7. React-Router - [https://reactrouter.com/](https://reactrouter.com/)
