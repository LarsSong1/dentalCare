import { Button } from '@/components/ui/button'
import { signUpWithEmail } from '@/lib/server/auth'
import { signUpWithGoogle } from '@/lib/server/oauth'
import Image from 'next/image'
import React from 'react'
import { dentalLogo, googleLogo } from '../../../public/content'
import Link from 'next/link'

import { getLoggedInUser } from '@/lib/server/appwrite'
import { redirect } from 'next/navigation'

const SignUpPage = async () => {
    const user = await getLoggedInUser();
    if (user) redirect("/dashboard");

    return (
        <>

            <section className='grid grid-cols-2 h-screen overflow-hidden'>
                <div className='col-span-1 lg:block hidden bg-black'>
                    <img src="adad" alt="imagen" />
                </div>
                <div className='lg:col-span-1 place-items-center col-span-2 place-content-center space-y-4'>
                    <Image width={80} height={80} src={dentalLogo} alt="Logo" />
                    <div>
                        <h1 className='font-bold text-xl text-center'>Crea una cuenta</h1>
                        <p className='font-normal text-sm opacity-85 text-center'>Registrate en nuestra plataforma usando tu correo<br />o Gmail</p>
                        {/* Iniciar Sesión Google */}
                        <form action={signUpWithGoogle} className='w-full mt-2 flex justify-center'>
                            <Button type="submit" className='w-full mx-auto'>
                                <Image src={googleLogo} alt="google-logo" width={'15'} height={'15'} />
                                <p>Google</p>
                            </Button>
                        </form>


                        {/* Iniciar Sesion con Correo */}

                        <form action={signUpWithEmail} className="mt-2">
                            <div className="flex flex-col">
                                <label className='text-xs' htmlFor="name">
                                    Nombre
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    placeholder="Nombre"
                                    type="text"
                                    className="text-xs border-black border-2 border-opacity-60 rounded-sm mt-2 placeholder:text-gray-400 p-2"
                                />
                                <label className="text-xs mt-2" htmlFor="email">Correo electronico</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="user@gmail.com"
                                    className="text-xs border-black border-2 border-opacity-60 rounded-sm mt-2 placeholder:text-gray-400 p-2"

                                />
                                <label className="text-xs mt-2" htmlFor="password">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="contraseña "
                                    className="text-xs border-black border-2 border-opacity-60 rounded-sm mt-2 placeholder:text-gray-400 p-2"


                                />
                            </div>
                            <div className="flex justify-center mt-4">
                                <Button className=" w-[250px]">
                                    Crear cuenta
                                </Button>
                            </div>
                            <div className="w-full mt-4 text-center">
                                <Link className="text-xs underline" href={'/signin'}>Iniciar Sesión</Link>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUpPage