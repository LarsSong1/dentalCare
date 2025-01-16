import React from 'react'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'
import { ModeToggle } from './ui/modeToggle'
import Link from 'next/link'
import Image from 'next/image'
import { dentalLogo } from '../../public/content'

const Navbar = () => {
    return (

        <menu className='container mx-auto py-4 flex justify-between'>
            <ul className=''>
                <Image width={80} height={80} src={dentalLogo} alt={`Logo`}/>
            </ul>
            <ul className='inline-flex gap-4'>
                <li>
                    <ModeToggle />
                </li>
                <li>
                    <Button>
                        <Mail />
                        <Link href={`/signin`}>Iniciar Sesión</Link>
                    </Button>
                </li>
            </ul>
        </menu>

    )
}

export default Navbar