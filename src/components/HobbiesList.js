import React from "react";
import HobbiesCard from "./HobbiesCard";

const HobbiesList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderHobbiesList = props.contacts.map((contact) => {
    return (
      
      <HobbiesCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return <div className="ui list">{renderHobbiesList}</div>;
};

export default HobbiesList;
