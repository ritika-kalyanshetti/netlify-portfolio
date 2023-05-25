import React from 'react'
import user from "../images/passport.jpeg";

const Intro = () => {
  return (
    <div className=" p-10 flex">
      <div className="w-40 h-40 rounded-full overflow-hidden top-16 left-16">
        <img
          className="object-cover w-full h-full"
          src={user}
          alt="Profile"
        />
      
      </div>

      <div className="marginTop: '50', ml-14">
        <h1 className="text-black flex font-Manrope font-medium text-4xl mb-2">Ritika S Kalyanshetti</h1>

        <hr style={lineStyle} />

        <p className="text-black font-normal font-Manrope text-lg pt-2">
            Student at PESU
          </p>
        <p className="text-black font-normal font-Manrope text-lg">Currently in 6th sem (8.68 gpa), am an aspiring Web developer.  </p>

        

      </div>
    </div>
  )
}
const lineStyle = {
  margin: '10px 0',
  border: 'none',
  borderTop: '1px solid black',
};

export default Intro