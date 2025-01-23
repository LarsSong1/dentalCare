import React from 'react'
import H1 from './ui/h1'
import H3 from './ui/h3'
import StatusBox from './statusBox'
import { Calendar, Check, User } from 'lucide-react'
import Patientbadge from './ui/patientbadge'
import Link from 'next/link'
import H4 from './ui/h4'

import AppointmentCard from './ui/appointmentCard'


const dataPatients = [
    {
        id: 1,
        name: 'Daniel Soto',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        doctor: 'Jessenia Lucas'

    },
    {
        id: 2,
        name: 'Daniel Soto',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        doctor: 'Jessenia Lucas'

    },
    {
        id: 3,
        name: 'Daniel Soto',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        doctor: 'Jessenia Lucas'

    },
    {
        id: 4,
        name: 'Daniel Soto',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        doctor: 'Jessenia Lucas'

    },
    {
        id: 5,
        name: 'Daniel Soto',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        doctor: 'Jessenia Lucas'

    },
    {
        id: 6,
        name: 'Daniel Soto',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        doctor: 'Jessenia Lucas'

    },
    {
        id: 7,
        name: 'Daniel Soto',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        doctor: 'Jessenia Lucas'

    },
    {
        id: 8,
        name: 'Daniel Soto',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        doctor: 'Jessenia Lucas'

    },


]


const appointments = [
    {
        id: 1,
        patientName: 'Jair Alejandro Gavilanez',
        hour: '9:30 am',
        date: '10/01/2025',
        appointmentReason: 'Control Dental',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien vel ligula imperdiet sceler'
    },
    {
        id: 2, 
        patientName: 'Jair Alejandro Gavilanez',
        hour: '9:30 am',
        date: '10/01/2025',
        appointmentReason: 'Control Dental',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien vel ligula imperdiet sceler'
    
    },
    {
        id: 3, 
        patientName: 'Jair Alejandro Gavilanez',
        hour: '9:30 am',
        date: '10/01/2025',
        appointmentReason: 'Control Dental',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien vel ligula imperdiet sceler'
    
    },
    {
        id: 4, 
        patientName: 'Jair Alejandro Gavilanez',
        hour: '9:30 am',
        date: '10/01/2025',
        appointmentReason: 'Control Dental',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien vel ligula imperdiet sceler'
    
    }



]

const DoctorDashboard = () => {
    return (
        <section className='p-4 container h-screen'>
            <H1 title='Dashboard' />
            <H3 title='Bienvenido al Administrador' />
            <div className='grid lg:grid-cols-3 gap-4 mt-2'>
                <StatusBox title='Citas Atendidas' icon={<User size={20} />} counter={50} />
                <StatusBox title='Citas por Atender' icon={<Calendar size={20} />} counter={50} />
                <StatusBox title='Citas por Confirmar' icon={<Check size={20} />} counter={50} />
            </div>
            <div className='grid lg:grid-cols-3 gap-2 mt-2 lg:h-4/6 h-2/6'>
                <div className='p-2 border-black border-[1.8px] rounded-sm border-opacity-75 w-full lg:col-span-2 col-span-3 overflow-y-scroll'>
                    <H4 title='Citas' />
                    {/* <div className='mt-2'>
                        <AppointmentCard hour={'9:30 am'} date='10/01/2025' patientName='Jair Alejandro Gavilanez' appointmentReason='Control Dental' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien vel ligula imperdiet scelerisque ac rutrum sem.' />
                    </div> */}
                    {
                        appointments.map((item)=>(
                            <div  className='mt-2'>
                        <AppointmentCard keyDiv={item.id} hour={item.hour} date={item.date} patientName={item.patientName} appointmentReason={item.appointmentReason} description={item.description} />
                    </div>
                        ))
                    }
                </div>

                <div className='lg:col-span-1 col-span-3 border-black border-[1.8px] rounded-sm border-opacity-75 p-2 h-[500px] overflow-y-scroll'>
                    <div className='flex justify-between'>
                        <H4 title="Pacientes Recientes" />
                        <Link href={'#'} className='text-xs font-thin opacity-65'>Ver mas</Link>
                    </div>
                    <div>
                        {
                            dataPatients.map((item) => (
                                <Patientbadge key={item.id} image={item.image} name={item.name} doctor={item.doctor} url='#' />
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default DoctorDashboard