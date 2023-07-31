import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const styles = {
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '15px',
      textTransform: 'uppercase',
      color: '#333',
      animation: 'slideRight 1.5s forwards',
      opacity: 0,
      transitionTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    },
    itemName: {
      width: '65%',
      fontWeight: 500,
    },
    itemNumber: {
      marginRight: 'auto',
    },
    delete_btn: {
      borderRadius: '5px',
      display: 'block',
      fontSize: '12px',
      textTransform: 'uppercase',
      padding: '2px 6px',
      cursor: 'pointer',
      borderRadius: '5px',
      background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
      boxShadow: '3px 3px 5px #8b8b8b, -3px -3px 5px #ffffff',
    },
  };

  return (
    <ul style={{ width: '320px', margin: '0 auto', backgroundColor: '#f9f9f9', borderEndStartRadius: '5px', borderEndEndRadius: '5px', padding: '20px 10px 10px', position: 'relative', top: '45px', left: '50%', transform: 'translateX(-50%)' }}>
      {contacts.map(contact => (
        <li key={contact.id} style={styles.item}>
          <span style={styles.itemName}>{contact.name}:</span>
          <span style={styles.itemNumber}>{contact.phone}</span>
          <button type="button" onClick={() => onDeleteContact(contact.id)} style={styles.delete_btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
