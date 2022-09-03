import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async credentials => {
    try {
        const { data } = await axios.get('/contacts', credentials);

        return data;
    } catch (error) {
        // TODO: Добавить обработку ошибки error.message
    }
});

const addContact = createAsyncThunk('contacts/addContact', async newContact => {
    try {
        const { data } = await axios.post('/contacts', newContact);

        return data;
    } catch (error) {
        // TODO: Добавить обработку ошибки error.message
    }
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
    try {
        await axios.delete(`/contacts/${id}`);

        return id;
    } catch (error) {
        // TODO: Добавить обработку ошибки error.message
    }
});

const refreshContact = createAsyncThunk('contacts/refreshContact', async({ id, name, phone }) => {
    try {
        const { data } = await axios.patch(`/contacts/${id}`, {
            name,
            phone,
        });

        return data;
    } catch (error) {
        // TODO: Добавить обработку ошибки error.message
    }
});

const operations = {
    fetchContacts,
    addContact,
    deleteContact,
    refreshContact,
};
export default operations;