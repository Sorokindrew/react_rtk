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

-   приложение написано на TypeScript, с использованием функциональных компонентов с хуками
-   форма регистрации и аутентификации рендерится с использованием _React.createPortal_

```javascript
export function Modal({ children }: { children: React.ReactNode }) {
    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50">
            {children}
        </div>,
        node
    );
}
```

-   информация о зарегистрированных пользователях, история поиска и избранное (отдельно для каждого пользователя) сохраняются в LocalStorage
-   логин зарегистрированного пользователя предоставляется с использованием _Context_

```javascript
function App() {
  const [user, setUser] = useState('');

  const ContextProvider = userContext.Provider;

  const Search = lazy(() => import('./pages/Search'));

  return (
    <ContextProvider value={{ value: user, onChange: setUser }}>
```

-   запросы к API реализованы с помощью _RTK Query_
-   для пользователей, избраного и истории поиска использованы слайсы (createSlice)
-   пример использования предохранителя реализован с помощью библиотеки [react-error-boundary](https://www.npmjs.com/package/react-error-boundary)

```javascript
<Route
    path="/"
    element={
        <ErrorBoundary fallback={<div>Something went wrong...</div>}>
            <MainPage />
        </ErrorBoundary>
    }
/>
```

-   пример "умных" (контейнеров) и "тупых" (презентационных) компонентов реализован на FavButtonContainer + FavButton

```javascript
export function FavButtonContainer({
    name,
    id,
    description,
    thumbnail_url,
}: Dish) {
    const [isFavourite] = useIsInFavourite(id);
    const dispatch = useDispatch();
    const { value } = useContext(userContext);
    const cssButton = 'border px-2 py-2 rounded absolute right-0 bottom-0';

    const clickHandler = () => {
        if (!isFavourite) {
            dispatch(
                addToFavourite({
                    user: value,
                    dish: { name, id, description, thumbnail_url },
                })
            );
        } else {
            dispatch(
                removeFromFavourite({
                    user: value,
                    dish: { name, id, description, thumbnail_url },
                })
            );
        }
    };
    let text = 'Add';
    let color = 'bg-green-500';
    if (isFavourite) {
        text = 'Remove';
        color = 'bg-red-500';
    }

    return (
        <FavButton
            styles={cssButton + ' ' + color}
            text={text}
            onClick={clickHandler}
        />
    );
}
```

-   типизация пропсов нескольких компонентов написана с использованием _`prop-types`_

```javascript
Authorization.propTypes = {
    loggedUser: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
};

Authorization.defaultProps = {
    onLogout() {},
};
```

-   для ограничения запросов к серверу написан _`useDebounce`_
-   реализован logger-middleware для сохранения всех запросов приложения (запросы к серверу, запросы к стору)

```javascript
export const logger: Middleware = store => next => action => {
    const dataToSave: Log = getFromLS('log');
```

-   использован _`transformResponse`_ для выделения нужной информации из ответа сервера

```javascript
transformResponse: (response: ApiResponse) => response.results,
```

-   реализовано форматирование кода через _`Prettier`_ при pull_request (CI)
-   Lazy loading используется для загрузки компонента Search

```javascript
<Route
    path="/search"
    element={
        <Suspense fallback={<div>Loading...</div>}>
            <Search />
        </Suspense>
    }
/>
```
