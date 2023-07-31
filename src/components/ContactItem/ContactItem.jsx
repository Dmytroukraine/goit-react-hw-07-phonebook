import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from '../../redux/contacts/contacts-thunk';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = (contactId) => {
    dispatch(deleteContactsThunk(contactId));
  };

  return (
    <li key={id} className={style.item}>
      <span className={style.itemName}>{name}:</span>
      <span className={style.itemNumber}>{number}</span>
      <button
        className={style.delete_btn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        x
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
