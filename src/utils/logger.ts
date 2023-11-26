import { Middleware } from '@reduxjs/toolkit';

import { Log } from '../models/models';

import { formatDate } from './formatDate';
import { getFromLS, saveToLS } from './localStoreData';

export const logger: Middleware = store => next => action => {
    const dataToSave: Log = getFromLS('log');
    if (action.type === 'api/executeQuery/fulfilled') {
        const date = new Date(action.meta.fulfilledTimeStamp);

        dataToSave[`${formatDate(date)}`] = {
            request: action.meta.arg.endpointName,
            payload: action.payload,
        };
        saveToLS('log', JSON.stringify(dataToSave));
    } else if (
        action.type.startsWith('favourites') ||
        action.type.startsWith('history') ||
        action.type.startsWith('users')
    ) {
        dataToSave[`${formatDate(new Date())}`] = {
            request: action.type.split('/')[1],
            payload: action.payload,
        };
        saveToLS('log', JSON.stringify(dataToSave));
    }
    return next(action);
};
