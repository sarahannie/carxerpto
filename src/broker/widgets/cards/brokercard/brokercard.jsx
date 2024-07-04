import React from 'react'
import { Button } from "@material-tailwind/react";
import person from '../../../../assets/woman.png'
import { toast } from 'react-toastify';

const Brokercard = ({year, clientSatisfaction, location, language, about, specialities, expertise, firstname, lastname, image}) => {
  const handleClick = () => {
    toast.info('Please go to the main website for overview');
  };
  return (
    
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-4">
      <div className="flex items-center">
          <img 
      className="w-12 h-12 rounded-full mr-4" 
      src={image ? image : person} 
      alt="profile" 
    />
        <p className="text-gray-800 font-bold text-lg">{firstname} {lastname}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 text-start">
        <div>
          <h3 className="text-gray-600">Experience</h3>
          <p className="text-gray-800 font-semibold">{year} years+</p>
        </div>
        <div>
          <h3 className="text-gray-600">Reviews</h3>
          <p className="text-gray-800 font-semibold">{clientSatisfaction}+</p>
        </div>
        <div>
          <h3 className="text-gray-600">Location</h3>
          <p className="text-gray-800 font-semibold">{location}</p>
        </div>
        <div>
          <h3 className="text-gray-600">Language</h3>
          <p className="text-gray-800 font-semibold">{language}</p>
        </div>
      </div>
      <div className="mt-4 text-start">
        <h3 className="text-gray-600">About</h3>
        <p className="text-gray-800">
          {about}
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-start">
        <div>
          <h3 className="text-gray-600">Specialties</h3>
          <ul className="list-disc list-inside">
            <li>{specialities}</li>
            
          </ul>
        </div>
        <div>
          <h3 className="text-gray-600">Expertise</h3>
          <ul className="list-disc list-inside">
            <li>{expertise}</li>
            
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        
            <Button className="bg-primary-light text-primary-dark font-semibold rounded focus:outline-none" onClick={handleClick}>Contact</Button>
       
        
      </div>
    </div>
  </div>
  )
}

export default Brokercard