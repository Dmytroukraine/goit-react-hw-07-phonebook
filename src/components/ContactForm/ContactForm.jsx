import { useEffect, useState } from 'react';
import style from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contacts-selectors';
import {
  addContactsThunk,
  getContactsThunk,
} from 'redux/contacts/contacts-thunk';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const newContacts = {
      name: name,
      number: number,
    };

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContactsThunk(newContacts));
    setName('');
    setNumber('');
  };

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit} className={style.formfact}>
        <label className={style.label}>Name</label>
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={style.label}>Number</label>
        <input
          className={style.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={style.submit_btn}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Add contact
      </button>
      </form>
    </div>
  );
};

export default ContactForm;