import { Clock } from 'lucide-react'
import React from 'react'
import H4 from './h4'
import { Button } from './button'

const AppointmentCard = ({ hour, date, patientName, appointmentReason, description, keyDiv }: { hour: string, date: string, patientName: string, appointmentReason: string, description: string, keyDiv: number }) => {
    return (
        <div key={keyDiv} className='pt-4 border-b-2 border-black border-opacity-40 rounded-md p-2 pb-4 shadow-xl'>
            <div className='flex flex-wrap justify-between'>
                <div>
                    <p className='text-xs font-normal'><span className='font-bold text-xs'>Día:</span>{date}</p>
                    <div className=' border-black border-[1.8px] rounded-sm border-opacity-75 w-[110px] p-2 flex items-center gap-2 mt-2'>
                        <Clock size={20} />
                        <p>{hour}</p>
                    </div>
                </div>
                <div className='self-start ml-4'>
                    <H4 title={patientName} />
                    <div className='inline-flex'>
                    <H4 title='Motivo: '/>
                    <h4 className='ms-2'>{appointmentReason}</h4>
                    </div>
                </div>
                <div className='ms-auto flex gap-2'>
                    <Button  className='bg-red-400 hover:bg-red-900 hover:text-black text-black'>
                        Rechazar
                    </Button>
                    <Button className='bg-green-300 text-black0 hover:bg-green-800 hover:text-white' >
                        Aceptar
                    </Button>
                </div>
            </div>
            <div className='flex mt-4'>
                <H4 title='Descripción:'/>
                <p className='ms-8'>{description}</p>
            </div>
        </div>
    )
}

export default AppointmentCard