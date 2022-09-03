const getContacts = state => state.contacts.contacts;
const getIsLoading = state => state.contacts.isLoading;

const contactsSelectors = {
    getContacts,
    getIsLoading,
};

export default contactsSelectors;