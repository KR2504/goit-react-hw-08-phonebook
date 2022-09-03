import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'App';
import './index.css';
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render( <
    Provider store = { store } >
    <
    PersistGate loading = { null }
    persistor = { persistor } >
    <
    BrowserRouter basename = "/goit-react-hw-08-phonebook/" >
    <
    App / >
    <
    /BrowserRouter> < /
    PersistGate > < /
    Provider >
);