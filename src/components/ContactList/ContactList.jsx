import React, { useEffect } from 'react'; // Додайте імпорт useEffect
import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filter/filter-selectors';
import { deleteContactsThunk } from '../../redux/contacts/contacts-thunk';
import {getContactsThunk} from '../../redux/contacts/contacts-thunk';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
   
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleContactDelete = (id) => {
    dispatch(deleteContactsThunk(id));
  };

  return (
    <ul className={style.list}>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDelete={() => handleContactDelete(id)}
          />
        ))
      ) : (
        <li className={style.error}>No contacts found</li>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
