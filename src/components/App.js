import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import AddHobby from "./AddHobby";
import HobbiesList from "./HobbiesList";
import Intro from "./Intro";
import Contact from "./Contact";
import Experience from "./Experience";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container centre">
      <Intro />
      <Contact />
      <Experience />
      <div className="mt-4 font-family: 'Manrope' font-style: normal;"> 
      <h2 style={headerStyle}>Hobbies</h2>
      <HobbiesList contacts={contacts} getContactId={removeContactHandler} />
      <AddHobby addContactHandler={addContactHandler} />
      </div>
    </div>
  );
}

const headerStyle = {
  fontSize: 32,
};

export default App;
