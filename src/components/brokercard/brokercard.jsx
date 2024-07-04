import React from 'react'
import { Button } from "@material-tailwind/react";
import person from '../../assets/woman.png'
import { Link } from 'react-router-dom';
import  {useGetBrokerQuery} from '../../app/api/buyerProductApi'
import { useNavigate } from 'react-router-dom';

const Brokercard = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading, isError } = useGetBrokerQuery();
  const profile = Array.isArray(data?.responseMessage?.brokers) ? data.responseMessage.brokers: []
  console.log('broke',profile)
  return (
    <div className="grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2 mt-4">
       {
      profile.map( (broker, index)=>(
        <div className="max-w-lg  mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div  key={index} className="p-4 w-[430px]">
      <div className="flex items-center">
        <img className="w-12 h-12 rounded-full mr-4" src={broker.profilePhoto?broker.profilePhoto:person} alt="profile" />
        <p className="text-gray-800 font-bold text-lg">{broker.firstName} {broker.lastName}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 text-start">
        <div>
          <h3 className="text-gray-600">Experience</h3>
          <p className="text-gray-800 font-semibold">{broker.experience}years+</p>
        </div>
        <div>
          <h3 className="text-gray-600">Reviews</h3>
          <p className="text-gray-800 font-semibold">4.0+</p>
        </div>
        <div>
          <h3 className="text-gray-600">Location</h3>
          <p className="text-gray-800 font-semibold">{broker.location}</p>
        </div>
        <div>
          <h3 className="text-gray-600">Language</h3>
          <p className="text-gray-800 font-semibold">{broker.language}</p>
        </div>
      </div>
      <div className="mt-4 text-start">
        <h3 className="text-gray-600">About</h3>
        <p className="text-gray-800">
          {broker.about}
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-start">
        <div>
          <h3 className="text-gray-600">Specialties</h3>
          <ul className="list-disc list-inside">
            <li>{broker.specialities}</li>
            
          </ul>
        </div>
        <div>
          <h3 className="text-gray-600">Expertise</h3>
          <ul className="list-disc list-inside">
            <li>{broker.expertise}</li>
            
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        
            <Button className="bg-primary-light text-primary-dark font-semibold rounded focus:outline-none" onClick={() => navigate(`/broker-contact/${broker.id}`, { state: { broker } })}>Contact</Button>
        
        
      </div>
    </div>
    </div>
      ))
    }
    </div>
  )
}

export default Brokercard