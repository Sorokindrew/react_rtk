import React, { useContext, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useDebounce } from '../hooks/useDebounce';
import { useSearchDishQuery } from '../store/api/api';
import { addToHistory } from '../store/historySlice';
import { Dish } from '../models/models';
import { useLoggedUser } from '../hooks/useLoggedUser';
import { userContext } from '../context/userContext';
import { DishCard } from '../components/DishCard';

function Search() {
    const [query, setQuery] = useSearchParams();
    const searchValue = query.get('item') === null ? '' : query.get('item');
    const [search, setSearch] = useState(searchValue!);
    const [dropdown, setDropdown] = useState(false);
    const debouncedSearch = useDebounce(search);
    const { user } = useContext(userContext);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [loggedUser] = useLoggedUser();


    const clickHandler = (item: Dish) => {
        nav(`/dish/${item.id}`);
        if (loggedUser) {
            dispatch(addToHistory({ user: user, search: search }));
        }

    };

    const { isLoading, data } = useSearchDishQuery(debouncedSearch, {
        skip: debouncedSearch.length < 3
    });

    const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setDropdown(true);
    };

    const focusHandler = () => {
        setDropdown(true);
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setQuery({ item: debouncedSearch });
        if (loggedUser) {
            dispatch(addToHistory({ user: user, search: search }));
        }
        setDropdown(false);
    };

    return (
        <main className="px-5 py-10 text-2xl">
            <div className="mx-auto pl-10 relative">
                <form onSubmit={submitHandler}>
                    <input type="text"
                        className="w-[760px] h-[50px] mx-auto border mr-3 px-2 py-2"
                        placeholder="Type here what you want to search..."
                        value={search}
                        onChange={searchChangeHandler}
                        onFocus={focusHandler}
                        onBlur={() => setDropdown(false)}
                    />
                    <button type="submit" className="border rounded-md bg-gray-400 text-white px-2 py-2">Search</button>
                </form>
                {dropdown && <ul className="absolute top-[50px] left-10 max-h-[200px] overflow-y-scroll">
                    {isLoading && (
                        <div className="w-[760px]">Loading...</div>
                    )}
                    {data?.map(el => (
                        <li key={el.id}
                            className="cursor-pointer hover:bg-gray-300 w-[760px]"
                            onClick={() => clickHandler(el)}>
                            {el.name}
                        </li>
                    ))}
                    {data?.length === 0 && (
                        <div className="w-[760px]">No dish found</div>
                    )}
                </ul>}
                {searchValue !== '' && !dropdown && (
                    <div className="grid grid-cols-3 gap-10 px-5 py-10">
                        {isLoading && (
                            <div className="text-center">Loading...</div>
                        )}
                        {data?.map(item => {
                            return (
                                <DishCard key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    description={item.description}
                                    thumbnail_url={item.thumbnail_url} />
                            );
                        })}

                    </div>
                )}
            </div>
        </main>
    );
}

export default Search;