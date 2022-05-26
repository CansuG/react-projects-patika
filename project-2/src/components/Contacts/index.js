import { useState, useEffect } from 'react';

import {} from './styles.css';

import List from './List';
import Form from './Form';

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: 'Cansu',
      phone_number: '123456789'
    }, {
      fullname: 'Ayşe',
      phone_number: '16482379'
    }, {
      fullname: 'Şirin',
      phone_number: '987654321'
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;
