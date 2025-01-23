import Image from 'next/image'
import React from 'react'
import H4 from './h4'

const DoctorCard = ({ image, name, city, speciality }: { image: string, name: string, city: string, speciality: string }) => {
    return (
        <div className='border lg:h-[380px] h-[320px] lg:w-[250px] w-[100%]  border-gray-500 p-2 rounded-md mb-4'>
            <div className='flex justify-center'>
                <Image src={image} width={200}  height={100} className=' lg:h-64 h-52 object-cover w-full rounded-md' alt={`${name}-image-doctor`} />
            </div>
            <div className='flex justify-center flex-col items-center'>
                <H4 title={name} />
                <h5 className='text text-[#4967B0] text-sm'>{speciality}</h5>
                <p className='text-sm text-[#3C5E46]'>Lugar te atención:</p>
                
                <h5 className='text-sm'>{city}</h5>
            </div>
        </div>
    )
}

export default DoctorCard