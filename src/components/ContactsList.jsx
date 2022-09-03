import React from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../redux/contacts";

const Contacts = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.value);
    const contacts = useSelector(contactsSelectors.getContacts);
    const filteredContacts = filter?.length ? contacts?.filter(({name}) =>
        name.toLowerCase().includes(filter.toLowerCase())) : contacts;
    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);
    
    return (
        <ul>
            {contacts?.length ? filteredContacts?.map(({ name, id, number }) => {
                return (
                    <li key={id}>{name}: {number} <button onClick={() => dispatch(contactsOperations.deleteContact(id))}>Delete</button></li>
                    
                )
            }): <span>Phonebook empty!</span>}
        </ul>
    );
};

export default Contacts;