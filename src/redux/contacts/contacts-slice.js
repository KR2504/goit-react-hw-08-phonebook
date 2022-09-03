import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operation';

const initialState = {
    contacts: [],
    isRefresh: false,
    isLoading: false,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [contactsOperations.fetchContacts.pending](state, _) {
            state.isLoading = true;
        },
        [contactsOperations.fetchContacts.fulfilled](state, { payload }) {
            state.contacts = payload;
            state.isLoading = false;
        },
        [contactsOperations.fetchContacts.rejected](state, _) {
            state.isLoading = false;
        },
        [contactsOperations.addContact.pending](state, _) {
            state.isRefresh = true;
        },
        [contactsOperations.addContact.fulfilled](state, { payload }) {
            state.contacts = [...state.contacts, payload];
            state.isRefresh = false;
        },
        [contactsOperations.addContact.rejected](state, _) {
            state.isRefresh = false;
        },
        [contactsOperations.deleteContact.fulfilled](state, { payload }) {
            state.contacts = state.contacts.filter(contact => contact.id !== payload)
        },
        [contactsOperations.refreshContact](state, { payload }) {
            state.contacts = state.contacts.map(contact =>
                contact.id === payload.id ? payload : contact
            )
        }
    }
});

export default contactsSlice.reducer;