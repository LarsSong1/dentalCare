import Slider from '@/components/Slider'
import StatusBox from '@/components/statusBox'
import H1 from '@/components/ui/h1'
import H3 from '@/components/ui/h3'
import H4 from '@/components/ui/h4'
import { CalendarHeart, ShieldPlus, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const dataSlider = [
  {
    id: 1,
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
    image: 'https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1619&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
    image: 'https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1619&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
    image: 'https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1619&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
    image: 'https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1619&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

const DashboardPage = () => {
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
      <div className='grid grid-cols-3 gap-2 mt-2'>
        <div className='p-2 border-black border-[1.8px] rounded-sm border-opacity-75 w-full lg:col-span-2 col-span-3'>
          <div className='flex justify-between'>
            <H4 title='Mejores doctores' />
            <Link href={'#'} className='text-xs font-thin opacity-65'>Ver mas</Link>
          </div>
          <Slider data={dataSlider} />
        </div>
      </div>

    </section>
  )
}

export default DashboardPage