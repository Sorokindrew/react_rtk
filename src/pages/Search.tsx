import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useDebounce } from '../hooks/useDebounce';
import { useSearchDishQuery } from '../store/api/api';
import { addToHistory } from '../store/historySlice';
import { Dish } from '../models/models';
import { useLoggedUser } from '../hooks/useLoggedUser';
import { userContext } from '../context/userContext';

function Search() {
    const [search, setSearch] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const debouncedSearch = useDebounce(search);
    const { value } = useContext(userContext);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [loggedUser] = useLoggedUser();

    const clickHandler = (item: Dish) => {
        nav(`/dish/${item.id}`);
        if (loggedUser) {
            dispatch(addToHistory({ user: value, dish: item }));
        }

    };

    const { isLoading, data } = useSearchDishQuery(debouncedSearch, {
        skip: debouncedSearch.length < 3
    });

    useEffect(() => {
        setDropdown(debouncedSearch.length >= 3);
    }, [debouncedSearch, data]);

    return (
        <main className="px-5 py-10 text-2xl">
            <div className="mx-auto pl-10 relative">
                <input type="text"
                    className="w-[760px] h-[50px] mx-auto border mr-3 px-2 py-2"
                    placeholder="Type here what you want to search..."
                    value={search}
                    onChange={event => setSearch(event.target.value)} />
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
            </div>
        </main>
    );
}

export default Search;