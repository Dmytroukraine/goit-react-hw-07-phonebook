// ContactForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../Redux/contacts/contacts-slice'; 
import style from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'number' && !/^[0-9\s()+-]*$/.test(value)) {
      alert('Введіть лише цифри, символи та пробіл!');
      return;
    }

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
  
    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.label}>
        Name
        <input
          type="text"
          name="name"
          className={style.input}
          pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
          autoFocus
        />
      </label>

      <label className={style.label}>
        Number
        <input
          type="tel"
          name="number"
          className={style.input}
          pattern="[0-9\s()+-]*"
          title="Phone number must contain only digits, symbols (+, -, (, ), space)"
          required
          onChange={handleChange}
          value={number}
        />
      </label>

      <button type="submit" className={style.submit_btn}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
