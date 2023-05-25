import React from 'react';
import user from "../images/logo1.png";

const Experience = () => {

     return (
        <div className='box-container mt-4'> 
        <div style={headerStyle}>Experience</div> 
        <div style={containerStyle}>
          
          <hr style={lineStyle} />
          
          <p style={textStyle}    >
            Frontend developer
            </p>
            
            <div> <img src={user} alt="Image"  style={imageStyle} /> </div>
            <p style={textStyle}>
            I worked as a frontend flutter developer. Got to work on Bloc for state management and Firebase for backend
            </p>
            
          </div>
        </div>
        
      );
    };

      
    const containerStyle = {
        width: '80%',
        marginRight: '0',
        background: '#C58813',
      };
      
      const headerStyle = {
        fontSize: 32,
      };
      
      const lineStyle = {
        margin: '10px 0',
        border: 'none',
        borderTop: '1px solid black',
      };
      
      const contentStyle = {
        display: 'flex',
      };
      
      const imageStyle = {
        width: '30px',
        height: '30px',
        //marginRight: '10px',
        marginLeft: '850px',
      };
      
      const textStyle = {
        fontSize: 18,
        color: '#FFFFFF'
      };
    
    
    


export default Experience