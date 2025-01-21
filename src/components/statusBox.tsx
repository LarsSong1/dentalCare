import Image from 'next/image'
import React, { ReactElement } from 'react'

const StatusBox = ({ title, counter, icon }: { title: string, counter: number, icon: ReactElement}) => {
    return (
        <div className='border-black border-[1.8px] rounded-sm border-opacity-75 w-full p-2 h-24'>
            <div className='flex'>
                <h4 className='text-sm font-bold'>{title}</h4>
                <div className='ms-2'>{icon}</div>
            </div>
            <div>
                <h2 className='text-5xl font-bold'>{counter}</h2>
            </div>
        </div>
    )
}

export default StatusBox