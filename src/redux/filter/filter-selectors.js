import { selectContacts } from "../../redux/contacts/contacts-selectors";

export const selectFilter = (state) => state.filter;

export const selectFilteredContacts = (state) => {
    const filter = selectFilter(state)
    const contact = selectContacts(state)
    return contact.filter(item=> item.name.toLowerCase().includes(filter.toLowerCase().trim()))
}
