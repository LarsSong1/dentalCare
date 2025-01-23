import React from 'react'
import H1 from './ui/h1'
import H3 from './ui/h3'
import StatusBox from './statusBox'
import { CalendarHeart, ShieldPlus, User } from 'lucide-react'
import H4 from './ui/h4'
import Link from 'next/link'
import Slider from './Slider'
import Patientbadge from './ui/patientbadge'

const dataSlider = [
    {
        id: 1,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
        speciality: 'Dentista',
        image: 'https://images.unsplash.com/photo-1599566147214-ce487862ea4f?q=80&w=1847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        city: 'Santa Elena'
    },
    {
        id: 2,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
        speciality: 'Dentista',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        city: 'Santa Elena'
    },
    {
        id: 3,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
        speciality: 'Dentista',
        image: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        city: 'Santa Elena'
    },
    {
        id: 4,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
        speciality: 'Dentista',
        image: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        city: 'Santa Elena'
    }
]


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

const AdminDashboard = () => {
    return (
        <section className='container p-4 h-screen'>
            <H1 title='Dashboard Page' />
            <H3 title='Bienvenido al Administrador' />
            <div className='grid lg:grid-cols-3 gap-2 mt-2 '>
                <StatusBox
                    title='Pacientes Totales'
                    counter={10}
                    icon={<User size={20} />}
                />
                <StatusBox
                    title='Doctores Totales'
                    counter={20}
                    icon={<ShieldPlus size={20} />}
                />
                <StatusBox
                    title='Citas Totales'
                    counter={30}
                    icon={<CalendarHeart size={20} />}
                />
            </div>
            <div className='grid grid-cols-3 gap-2 mt-2 lg:h-4/6 h-2/6'>
                <div className='p-2 border-black border-[1.8px] rounded-sm border-opacity-75 w-full lg:col-span-2 col-span-3'>
                    <div className='flex justify-between'>
                        <H4 title='Mejores doctores' />
                        <Link href={'#'} className='text-xs font-thin opacity-65'>Ver mas</Link>
                    </div>
                    <div className='flex items-center h-full mx-4'>
                        <Slider data={dataSlider} />
                    </div>
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

export default AdminDashboard