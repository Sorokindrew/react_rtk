# Create React App

Данный проект был сообран с использованием [Create React App](https://github.com/facebook/create-react-app).

## Запуск приложения

Запуск приложения осуществляется с помощью скрипта: _npm start_

## Стек технологий

Данный проект реализован с использованием [React](https://react.dev/), [Redux Toolkit](https://redux-toolkit.js.org/), [RTK Query](https://redux-toolkit.js.org/rtk-query/overview).  
Для типизации использован [TypeScript](https://www.typescriptlang.org/).  
Для стилизации использован [Tailwind](https://tailwindcss.com/docs/guides/create-react-app).  
В качестве API использовано [RapidApi](https://rapidapi.com/apidojo/api/tasty).  
Для валидации формы регистрации и аутентификации использована библиотека [Formik](https://formik.org/).

## Функционал приложения

В приложении реализованы следующие возможности:

-   регистрация новых пользователей
-   вход в приложение для зарегистрированных пользователей

#### _как для зарегистрированных пользователей, так и незарегистрированных_

-   поиск по названию блюда или ингредиента
-   возможность просмотра рецепта приготовления

#### _для зарегистрированных пользователей_

-   возможность добавления/удаления в избранное
-   возможмость просмотра истории поиска

## Особенности реализации

-   [x] Реализованы обязательные требования к функциональности
-   [x] информация о зарегистрированных пользователях, история поиска и избранное (отдельно для каждого пользователя) сохраняются в LocalStorage
-   [x] приложение написано с использованием функциональных компонентов с хуками
-   [x] пример "умных" (контейнеров) и "тупых" (презентационных) компонентов реализован на [FavButtonContainer](https://github.com/Sorokindrew/react_rtk/blob/main/src/components/FavButtonContainer.tsx) + [FavButton](https://github.com/Sorokindrew/react_rtk/blob/main/src/components/FavButton.tsx)
-   [x] есть [рендеринг списков](https://github.com/Sorokindrew/react_rtk/blob/main/src/components/Content.tsx)
-   [x] [форма](https://github.com/Sorokindrew/react_rtk/blob/main/src/components/AuthorizationForm/AuthorizationForm.tsx) регистрации и аутентификации реализована с помощью Formik и рендерится с использованием [_React.createPortal_](https://github.com/Sorokindrew/react_rtk/blob/main/src/components/Modal.tsx)
-   [x] логин зарегистрированного пользователя предоставляется с использованием [_Context_](https://github.com/Sorokindrew/react_rtk/blob/main/src/context/userContext.ts)

```javascript
function App() {
  const [user, setUser] = useState('');

  const ContextProvider = userContext.Provider;

  const Search = lazy(() => import('./pages/Search'));

  return (
    <ContextProvider value={{ user: user, onChange: setUser }}>
```

-   [x] пример использования [предохранителя](https://github.com/Sorokindrew/react_rtk/blob/main/src/App.tsx) реализован с помощью библиотеки [react-error-boundary](https://www.npmjs.com/package/react-error-boundary)
-   [x] реализованы кастомные [хуки](https://github.com/Sorokindrew/react_rtk/tree/main/src/hooks)
-   [x] типизация пропсов нескольких компонентов написана с использованием [_`prop-types`_](https://github.com/Sorokindrew/react_rtk/blob/main/src/components/Authorization/Authorization.jsx)
-   [x] для ограничения запросов к серверу написан [_`useDebounce`_](https://github.com/Sorokindrew/react_rtk/blob/main/src/hooks/useDebounce.ts)
-   [x] [Lazy loading](https://github.com/Sorokindrew/react_rtk/blob/main/src/App.tsx) используется для загрузки компоненты Search
-   [x] использован Modern Redux with Redux Toolkit
-   [x] для пользователей, избраного и истории поиска использованы слайсы ([createSlice](https://github.com/Sorokindrew/react_rtk/tree/main/src/store))
-   [x] реализован [logger-middleware](https://github.com/Sorokindrew/react_rtk/blob/main/src/utils/logger.ts) для сохранения всех запросов приложения (запросы к серверу, запросы к стору)
-   [x] [запросы к API](https://github.com/Sorokindrew/react_rtk/blob/main/src/store/api/api.ts) реализованы с помощью _RTK Query_
-   [x] использован _`transformResponse`_ для выделения нужной информации из ответа сервера

```javascript
transformResponse: (response: ApiResponse) => response.results,
```

-   [x] приложение написано на TypeScript
-   [x] реализовано форматирование кода через _`Prettier`_ при pull_request (CI)
