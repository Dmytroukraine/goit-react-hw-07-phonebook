// ContactList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/contacts/contacts-slice';
import { getFilteredContacts } from '../Redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactList.module.css';

const ContactList = () => {
  // eslint-disable-next-line no-unused-vars
  const filter = useSelector((state) => state.filter);
  const visibleContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={style.list}>
      {visibleContacts.length !== 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={handleDeleteContact}
            />
          );
        })
      ) : (
        <li className={style.error}>Not found name</li>
      )}
    </ul>
  );
};

export default ContactList;
