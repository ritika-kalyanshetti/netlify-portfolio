import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="mb-15" >  
       

        <button class="bg-blue-500 hover:bg-blue-700 text-white  font-Manrope font-normal mt-6 mr-10 py-6 px-20 rectangle transform 
                                transition duration-300 hover:scale-110">
            6361356861
        </button> 

        <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-Manrope font-normal mt-4 mr-10 py-6 px-20 rectangle transform 
                                transition duration-300 hover:scale-110">
            email 
            
        </button> 

          <button       
          class="bg-pink-500 hover:bg-pink-700 text-white font-Manrope font-normal mt-4 mr-10 py-6 px-20 rectangle transform 
                                transition duration-300 hover:scale-110">
            Linkedin 
        </button>
        
         
        <button class="bg-green-500 hover:bg-green -700 text-white font-Manrope font-normal mt-4  py-6 px-20     rectangle transform 
                                transition duration-300 hover:scale-110">
            Github 
        </button> 

    </div>
  )
}

const buttonStyle = {
  display: 'inline-block',
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: 'blue',
  color: 'white',
  textDecoration: 'none',
};

export default Contact