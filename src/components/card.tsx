import React from 'react'
import prof from '../assets/images/default.jpeg'

interface Props {
    name?:string; 
    title?:string;
    email?:string;
    image?:string; 
    phoneNumber?:string;
    skills?:string[];
}

const card = ({name, title, email, image, phoneNumber, skills}: Props) => {
  return (
    <div className='flex flex-col items-center justify-center ml-12 gap-2 pt-4 rounded-lg w-72 h-96 bg-sky-900 shadow-xl text-sky-50 hover:shadow-md'>
        
        {image && <img src={image} className='w-32 h-32 mb-4 mt-4 rounded-full' alt="Profile" />}
        {!image && <img className='w-32 h-32 mb-4 mt-4 rounded-full' src={prof}  alt="Default" />}
        <div className='text-lg text-cyan-300 font-montserrat text-[20px]'>{name}</div>
        <div className=''>
            <span className='italic text-sm'>{title}</span> <br />
            {email} <br />
            {phoneNumber}
        </div>
        <div className='flex gap-3 rounded-b-lg flex-wrap justify-center mt-2 h-full  p-2 font-mono bg-sky-950 w-full'>
            <span className='w-full flex justify-start pl-4 text-sm'>Skills</span>
        {skills?.map(skill =>(
            <p className=' border border-slate-100 px-2 py-1 rounded-lg text-[14px]'>{skill}</p>
            ))
        }
        </div>
        </div>
    )
};

export default card;
