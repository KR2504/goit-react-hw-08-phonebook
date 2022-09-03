import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts';
import filter from "./filter";
import { authReducer } from './auth';

const authPersistConfig = {
    key: 'auth',
    version: 1,
    storage,
};

const contactsPersistConfig = {
    key: 'contacts',
    version: 1,
    storage,
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: persistReducer(contactsPersistConfig, contactsReducer),
        filter,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    },
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);