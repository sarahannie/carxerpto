import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { SubEdit } from './subedit';
import SubDeactive from './subdeactive';


const SubscriptCard = () => {
  return (
    <div className='border py-2 w-[400px] mt-4 shadow-lg px-5'>
        <div className='text-primary-normal text-bold text-start font-bold text-[17px] py-4'>Buyers Subscription</div>
        <div className='text-primary-normal text-start py-1 text-[19px]'>$49.99<span className='text-gray-400'>/month</span></div>
        <div className='flex justify-between pb-5'>
            <p className='text-gray-600'>Duration:<span className='text-primary-normal'>Monthly</span> </p>
            <p className='text-gray-600'>Status: <span className='text-secondary-normal'>Active</span></p>
        </div>
        <div>
            <ui>
                <li className='flex py-2 text-start font-200 '>
                <IoCheckmarkCircleOutline className='mt-1' />Access to listings
                </li>
                <li className='flex py-2 text-start font-200 '>
                <IoCheckmarkCircleOutline className='mt-1'/>
                Online helpline for buyers
                </li >
                <li className='flex py-2 text-start font-200  '>
                <div>
                <IoCheckmarkCircleOutline className='mt-1'/>
                </div>
                Unlimited assistance from car 
                brokers for 1 month
                </li>
                <li className='flex py-2 text-start font-200 '>
                <div>
                <IoCheckmarkCircleOutline className='mt-1'/>
                </div>
                Buyers can work with any available
                car broker for assistance
                </li>
            </ui>
        </div>
        <div className='flex justify-between my-5'>
            
            <SubDeactive/>
            <SubEdit />
        </div>
    </div>
  )
}

export default SubscriptCard