import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css'
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filter/filter-selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  
  return (
    <ul className={style.list}>
      {
        contacts.length ? (
          contacts.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
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