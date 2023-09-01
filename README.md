### Harry Potter Characters 

### <a href="https://wcodersv.github.io/HarryPotter_react/" target="_blank">Посмотреть сайт</a>

**👩‍💻 Общее описание:**
Сервис представляет собой веб-приложение на React для поиска информации о персонажах из фильма "Гарри Поттер". Пользователи смогут просматривать карточки персонажей, фильтровать их по имени и факультету, а также добавлять персонажей в избранное. Для загрузки данных о персонажах будет использоваться метод fetch. В качестве технологического стека используется <i><u>React</u></i> для разработки пользовательского интерфейса и <i><u>React Router</u></i> для навигации между страницами

**📌 Основные задачи:**

1. Переписать существующий <a href="https://github.com/wcodersv/HarryPotter.git">проект, реализованный на JavaScript,</a> с использованием React.
2. Создать компоненты для ввода ключевых слов, отображения персонажей.
3. Реализовать фильтрацию персонажней по ключевым словам и по факультетам.
4. Реализовать подгрузку данных с сервера с использованием метода `fetch` и хука `useEffect`.
5. Разработать анимированный спиннер загрузки для обратной связи с пользователем.
6. Данные о избранных персонажах сохраняются в локальное хранилище (`localStorage`).
7. Реализовать функциональность добавления и удаления персонажей в список избранных.
8. Создать отдельную страницу для отображения избранных персонажей.


**📋 Технические детали:**

- Использовать React  для создания компонентов и управления состоянием приложения.
- Реализовать асинхронную подгрузку данных персонажней с сервера, используя метод `fetch` и хук `useEffect`.
- Использовать хуки `useState`, `useEffect` и `useMemo` для управления состоянием и жизненным циклом компонентов.
- Реализовать роутинг между страницами с помощью `react-router-dom`.
- Реализовать анимацию спиннера загрузки для улучшенной визуальной обратной связи.

**📋  Технические детали (использование хуков и состояний):**

В проекте используются следующие хуки и состояния для управления данными и состоянием компонентов:
- `useState`:
  - `inputValue` - хранит значение ввода ключевых слов.
  - `isLoading` - управляет состоянием загрузки.
  - `data` - содержит массив данных карточек персонажей.
  - `house` - содержит массив данных факультетов.
  - `selectedHouse` - определяет выбранный факультет.
  - `likedCards` - список избранных карт.
  
- `useEffect`:
  - выполняет запросы к API для получения данных при загрузке страницы.
  - следит за изменениями в likedCards и сохраняет их в локальное хранилище (localStorage).

- `useMemo`:
  - оптимизирует производительность компонента Home, фильтруя и сортируя данные на основе inputValue и selectedHouse.



<a href="https://www.figma.com/file/IEKD0HrGYAPdk5CXmRxiTR/Projects?node-id=2536%3A1081&mode=dev">Ссылка на макет в Figma</a>