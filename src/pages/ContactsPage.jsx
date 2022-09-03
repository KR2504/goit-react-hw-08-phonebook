import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Section from "../components/Section";
import ContactForm from '../components/ContactForm';
import Contacts from '../components/ContactsList';
import Filter from "../components/Filter";
import { contactsOperations, contactsSelectors } from "../redux/contacts";


const barStyles = {
    paddingLeft: 600,
    marginTop: 100,
};

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getIsLoading);


    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);

    return (
        <div style={barStyles}>
            <Section title="Phonebook">
                <ContactForm />
            </Section>

            <Section title="Contacts">
                {isLoading && <h1>Loading...</h1> }
                <Filter />
                <Contacts />
            </Section>
        </div>
    );
}