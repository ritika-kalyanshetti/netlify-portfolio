import React from "react";

const HobbiesCard = (props) => {
  const { id, name } = props.contact;
  return (
    
    <div className="item">

      
      
      <div class="bg-blue">
      <button class="bg-blue-500 hover:bg-blue-700 text-white  font-Manrope font-normal mt-6 py-6 px-40 rectangle transform 
                                transition duration-300 hover:scale-110">
            <div className="header font-Manrope font-normal white">{name} 
            <i
        className="trash alternate outline icon"
        style={{ color: "white", marginLeft: '100px' }}
        onClick={() => props.clickHander(id)}
      >  
      </i>
      </div>
        </button>
      </div>
      
    </div>
  );
};

export default HobbiesCard;
