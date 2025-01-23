import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Patientbadge = ({ image, name, doctor, url }: { image: string, name: string, doctor: string, url: string }) => {
    return (
        <div className='border-b-2 border-black border-opacity-20 py-2 my-2'>
            <div className='flex items-center'>
                <Image className='rounded-full mr-2' src={image} alt={`${name}-image-patient`} width={40} height={40} />
                <div>
                    <h5 className='text-sm'>{name}</h5>
                    <p className='font-bold text-sm'>Atendido por: <span className='font-normal'>{doctor}</span></p>
                </div>
                <div className='ms-auto'>
                    <Link className='bg-black rounded-md text-white px-6 py-2' href={'/'}>Ver</Link>
                </div>
            </div>
        </div>
    )
}

export default Patientbadge